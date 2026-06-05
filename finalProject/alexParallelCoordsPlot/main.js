const svg = d3.select("svg");
const W = window.innerWidth;
const H = window.innerHeight;

// Define 2 colors to represent the outputs:
// red for high risk, blue for low risk
const riskColor = {
  1: "#d73027",
  0: "#4575b4",
};

// Define the axes that will be displayed on the parallel
// coordinates plot
const axesDefs = [
  { key: "pack_years", label: "Pack Years" },
  { key: "age", label: "Age" },
  { key: "crp_level", label: "CRP Level" },
  { key: "air_pollution_index", label: "Air Pollution" },
  { key: "fev1_x10", label: "FEV1 (x10)" },
  { key: "smoking_years", label: "Smoking Years" },
  { key: "cigarettes_per_day", label: "Cigs / Day" },
  { key: "oxygen_saturation", label: "O2 Saturation" },
  { key: "exercise_hours_per_week", label: "Exercise Hrs/Wk" },
  { key: "lung_cancer_risk", label: "Cancer Risk" },
];

// Track whether the user is currently "brushing" an axis,
// and if they are, this will track the axis that they are
// brushing as well as the range of pixels that have been
// brushed over
let activeBrushExtent = null;

const margin = { top: 80, right: 80, bottom: 60, left: 80 };
const pw = W - margin.left - margin.right;
const ph = H - margin.top - margin.bottom;

const g = svg
  .append("g")
  .attr("id", "parallel-coords")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("../lung_cancer.csv")
  .then((rawData) => {
    // Convert all selected columns from strings to numbers
    rawData.forEach((d) => {
      axesDefs.forEach((ax) => {
        d[ax.key] = +d[ax.key];
      });
    });

    // Data is split into two outcome groups: high risk and low risk
    const highRisk = rawData.filter((d) => d.lung_cancer_risk === 1);
    const lowRisk = rawData.filter((d) => d.lung_cancer_risk === 0);

    const sample = (arr, n) => arr.slice(0, n);

    // Take the first 100 data points from each of the outcome groups
    const data = sample(highRisk, 100).concat(sample(lowRisk, 100));

    // Build a scale for each axis of the plot
    axesDefs.forEach((ax) => {
      if (ax.key === "lung_cancer_risk") {
        ax.scale = d3.scaleLinear().domain([0, 1]).range([ph, 0]);
      } else {
        ax.scale = d3
          .scaleLinear()
          .domain(d3.extent(data, (d) => d[ax.key]))
          .range([ph, 0])
          .nice();
      }
    });

    // X position for each axis
    const xScale = d3
      .scalePoint()
      .domain(axesDefs.map((ax) => ax.key))
      .range([0, pw])
      .padding(0.1);

    // This function computes the line that will be drawn by a row
    // of data (one patient's data)
    const linePath = (d) => {
      return d3.line()(
        axesDefs.map((ax) => [xScale(ax.key), ax.scale(d[ax.key])])
      );
    };

    // Sort the dataset so that high-risk patients are drawn above low-risk patients
    // This makes the high-risk data more visible
    const sortedData = data
      .slice()
      .sort((a, b) => a.lung_cancer_risk - b.lung_cancer_risk);

    // Draw one line per patient and store the selection for brushing updates
    const lines = g
      .append("g")
      .attr("class", "lines")
      .selectAll("path")
      .data(sortedData)
      .enter()
      .append("path")
      .attr("d", linePath)
      .attr("fill", "none")
      .attr("stroke", (d) => riskColor[d.lung_cancer_risk])
      .attr("stroke-width", 1.2)
      .attr("stroke-opacity", 0.45);

    // Draw each vertical axis
    axesDefs.forEach((ax) => {
      const axX = xScale(ax.key);

      const axG = g
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(${axX}, 0)`);

      axG
        .append("line")
        .attr("y1", 0)
        .attr("y2", ph)
        .attr("stroke", "#111")
        .attr("stroke-width", 2.5);

      // The lung cancer risk axis should only get 2 ticks (high and low).
      const tickCount = ax.key === "lung_cancer_risk" ? 2 : 5;
      axG.call(
        d3
          .axisLeft(ax.scale)
          .tickValues(ax.key === "lung_cancer_risk" ? [0, 1] : null)
          .ticks(tickCount)
          .tickFormat((val) => {
            if (ax.key === "lung_cancer_risk") {
              return val === 1 ? "High" : "Low";
            }
            return val;
          })
      );

      axG
        .selectAll(".tick text")
        .attr("font-size", "11px")
        .attr("font-weight", "bold")

      axG
        .selectAll(".domain, .tick line")
        .attr("stroke", "#111")
        .attr("stroke-width", 1.5);

      axG
        .append("text")
        .attr("y", ph + 20)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#111")
        .text(ax.label);

      // Create a brush for this axis
      const brush = d3
        .brushY()
        .extent([
          [-12, 0],
          [12, ph],
        ])
        .on("brush", () => {
          // Keep track of the axis that's currently being brushed, as
          // well as the range of pixels being brushed
          activeBrushExtent = {
            key: ax.key,
            scale: ax.scale,
            extent: d3.event.selection,
          };
          updateLines();
        })
        .on("end", () => {
          // If the user clicked on an axis without dragging, clear the brush
          if (!d3.event.selection) {
            activeBrushExtent = null;
            updateLines();
          }
        });

      axG.append("g").attr("class", "brush").call(brush);
    });

    // Function that's called whenever the brush changes, and adjusts
    // the opacity of lines that fall into the selected pixel range by
    // the brush
    const updateLines = () => {
      lines.attr("stroke-opacity", (d) => {
        // Restore all lines to default opacity if no brush is active
        if (activeBrushExtent === null) {
          return 0.45;
        }

        const py = activeBrushExtent.scale(d[activeBrushExtent.key]);
        const [y0, y1] = activeBrushExtent.extent;

        // Highlight the line if it falls into the brushed range,
        // otherwise make it almost invisible
        return py >= y0 && py <= y1 ? 0.85 : 0.04;
      });
    };

    // Chart title
    g.append("text")
      .attr("x", pw / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .text("Lung Cancer Risk Factors — Parallel Coordinates");

    // Brush instructions
    g.append("text")
      .attr("x", pw / 2)
      .attr("y", -25)
      .attr("text-anchor", "middle")
      .attr("font-size", "15px")
      .text(
        "Drag up and down on any axis to brush and filter lines. Click again on the axis to clear."
      );

    // Legend
    const legendData = [
      { label: "High Risk", color: riskColor[1] },
      { label: "Low Risk", color: riskColor[0] },
    ];

    const leg = g.append("g").attr("transform", `translate(${pw - 160}, -55)`);

    // Legend title
    leg
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text("Cancer Risk");

    legendData.forEach((item, i) => {
      leg
        .append("line")
        .attr("x1", 0)
        .attr("x2", 22)
        .attr("y1", i * 20 + 10)
        .attr("y2", i * 20 + 10)
        .attr("stroke", item.color)
        .attr("stroke-width", 2.5);

      leg
        .append("text")
        .attr("x", 28)
        .attr("y", i * 20 + 14)
        .attr("font-size", "12px")
        .text(item.label);
    });
  })
  .catch((err) => {
    console.error("Error loading lung_cancer.csv:", err);
  });
