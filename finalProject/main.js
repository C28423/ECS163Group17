const width = window.innerWidth;
console.log(width);
const height = window.innerHeight;
console.log(height);

//Background color
document.body.style.background = "#667292";

//COLOR PALETTE HEX CODES
//Color 0: #667292 (Background)
//Color 1: #bccad6 (not used)
//Color 2: #8d9db6 (Buttons)
//Color 3: #a5b6d2 (Buttons, highlighted)
//Color 3: #f1e3dd (Page text)

//The variable that lets the program keep track of what 'slide' the user is on.
let currentPage = 1;

//data1 is the kaggle dataset
d3.csv("lung_cancer.csv").then(data1 =>{
    console.log("data1", data1);
}).catch(function(error){
    console.log(error);
});

//data2 is from the logistic regression model
d3.csv("lrModelLungCancer.csv").then(data2 =>{
    console.log("data2", data2);
}).catch(function(error){
    console.log(error);
});

const svg0 = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height); 

const page1 = svg0.append("g")
    .attr("class", "page1")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //PAGE 1 - Intro & Background Information. Text about logistic regression and a graphic about it if we have time.
    //CONTENT FOR PAGE 1 START
    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 80)
        .text("Lung Cancer Risk Factors")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 150)
        .text("Using a dataset of health metrics, we aim to visualize factors that affect lung cancer risk.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 200)
        .text("We've used the dataset to train a logistic regression machine learning model. This works by feeding the model data from the dataset,")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 230)
        .text("and it learns which features can be used to predict lung cancer risk based on the target variable. This is expressed through coefficients,")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 260)
        .text("which represent significance in the outcome, and odds ratios, which communicate whether a higher value increases or decreases lung cancer")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 290)
        .text("risk based on whether the ratio is above or below 1.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 340)
        .text("Based on the model's coefficients & odds ratios, we've identified top contributing factors.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 400)
        .text("In parallel coordinate plot 1, we visualize some of these top factors and show their connection to lung cancer risk.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 440)
        .text("In parallel coordinate plot 2, we visualize coefficients of different factors, to compare them.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 480)
        .text("In our scatterplot, we compare different features against each other to get an idea of how they interact.")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 100);

    //CONTENT FOR PAGE 1 END

const page2 = svg0.append("g")
    .attr("class", "page2")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Page 2 - Static Scatterplot and related insight text.
    //CONTENT FOR PAGE 2 START
    page2.append("text")
        .attr("class", "page2")
        .attr("x", 50)
        .attr("y", 80)
        .text("Understanding the Data: Key Risk Factors for Lung Cancer")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 2 END

const page3 = svg0.append("g")
    .attr("class", "page3")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Static Parallel Coordinates and related insight text.
    //CONTENT FOR PAGE 3 START
    page3.append("text")
        .attr("class", "page3")
        .attr("x", 50)
        .attr("y", 80)
        .text("TEXT FOR PAGE 3")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 3 END

const page4 = svg0.append("g")
    .attr("class", "page4")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);
    
    //Page 4 - Summary of insights.
    //CONTENT FOR PAGE 4 START
    page4.append("text")
        .attr("class", "page4")
        .attr("x", 50)
        .attr("y", 80)
        .text("TEXT FOR PAGE 4")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 4 END

const page5 = svg0.append("g")
    .attr("class", "page5")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Page 5 - Scatterplot
    //CONTENT FOR PAGE 5 START
    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 80)
        .text("TEXT FOR PAGE 5")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 5 END

const page6 = svg0.append("g")
    .attr("class", "page6")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Page 6 - Parallel Coordinates 1
    //CONTENT FOR PAGE 6 START
    page6.append("text")
        .attr("class", "page6")
        .attr("x", 50)
        .attr("y", height - 60)
        .text("CAPTION FOR PAGE 6")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);


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
const pw = width - margin.left - margin.right - 120;
const ph = height - margin.top - margin.bottom - 120;

const pc1 = page6.append("g");

const g = pc1
  .append("g")
  .attr("id", "parallel-coords")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("lung_cancer.csv")
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

d3.selectAll(".page6").style("opacity", 0)
d3.selectAll(".page6").style("pointer-events", "none");

    //CONTENT FOR PAGE 6 END

const page7 = svg0.append("g")
    .attr("class", "page7")
    .attr("height", height)
    .attr("weight", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Page 7 - Parallel Coordinates 2
    //CONTENT FOR PAGE 7 START
    page7.append("text")
        .attr("class", "page7")
        .attr("x", 50)
        .attr("y", 80)
        .text("TEXT FOR PAGE 7")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 7 END

    //Buttons
    const backButton = svg0.append("rect")
        .attr("class", "backButton")
        .attr("x", 20)
        .attr("y", height/2 - 50)
        .attr("height", 100)
        .attr("width", 70)
        .attr("fill", "#8d9db6")
        .style("cursor", "pointer")
        .attr("stroke", "#000000")
        .attr("stoke-width", "1px")
        .style("opacity", 0)
        .style("pointer-events", "none");

    svg0.append("text")
        .attr("class", "backButtonText")
        .attr("x", 40)
        .attr("y", height/2 + 5)
        .text("<")
        .style("font-size", "50px")
        .style("font-weight", "bold")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("opacity", 0);

    const forwardButton = svg0.append("rect")
        .attr("class", "forwardButton")
        .attr("x", width - 90)
        .attr("y", height/2 - 50)
        .attr("height", 100)
        .attr("width", 70)
        .attr("fill", "#8d9db6")
        .style("cursor", "pointer")
        .attr("stroke", "#000000")
        .attr("stoke-width", "1px")
        .style("opacity", 100)
        .style("pointer-events", "auto");

    svg0.append("text")
        .attr("class", "forwardButtonText")
        .attr("x", width - 70)
        .attr("y", height/2 + 5)
        .text(">")
        .style("font-size", "50px")
        .style("font-weight", "bold")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("opacity", 100);


    //Button click functionality
        // NOTE - If you have text that needs to be clicked through: the buttons set pointer-events to auto.
        // You can define a class for the text and set pointer-events of that class to none after the first set to auto.

        function transitionToPage(targetPage) {
            // Fade out current page
            d3.selectAll(".page" + currentPage).transition()
                .duration(750)
                .style("opacity", 0)
                .style("pointer-events", "none");

            // Fade in target page
            d3.selectAll(".page" + targetPage).transition()
                .delay(1000)
                .duration(2000)
                .style("opacity", 100)
                .style("pointer-events", "auto");

            // Hides the back button if the target page is 1, otherwise shows it.
            d3.selectAll(".backButton").transition()
                .duration(750)
                .style("opacity", targetPage === 1 ? 0 : 100)
                .style("pointer-events", targetPage === 1 ? "none" : "auto");
            d3.selectAll(".backButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 1 ? 0 : 100);

            // Hides the forward button if the target page is 7, otherwise shows it.
            d3.selectAll(".forwardButton").transition()
                .duration(750)
                .style("opacity", targetPage === 7 ? 0 : 100)
                .style("pointer-events", targetPage === 7 ? "none" : "auto");
            d3.selectAll(".forwardButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 7 ? 0 : 100);

            currentPage = targetPage;
        }

        backButton.on("click", function() {
            if (currentPage > 1) {
                transitionToPage(currentPage - 1);
            }
        });
        forwardButton.on("click", function() {
            if (currentPage < 7) {
                transitionToPage(currentPage + 1);
            }
        });

    d3.selectAll(".forwardButton, .backButton").on("mouseover", function() {
        d3.select(this)
        .attr("fill", "#a5b6d2");
    })
    .on("mouseout", function() {
        d3.select(this)
            .attr("fill", "#8d9db6");
    })
