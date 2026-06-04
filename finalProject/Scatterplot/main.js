// Color for lung_cancer_risk
const RISK_COLORS = {
  0: "#4ade80",  // No risk = green
  1: "#f87171",  // At risk = red
};

const RISK_LABELS = {
  0: "No Cancer",
  1: "Lung Cancer",
};

// Numeric fields available for axes
const NUMERIC_FIELDS = [
  "age", "smoking_years", "cigarettes_per_day", "pack_years",
  "air_pollution_index", "bmi", "oxygen_saturation",
  "fev1_x10", "crp_level", "exercise_hours_per_week",
  "alcohol_units_per_week", "education_years"
];

const FIELD_LABELS = {
  age: "Age",
  smoking_years: "Smoking Years",
  cigarettes_per_day: "Cigarettes/Day",
  pack_years: "Pack Years",
  air_pollution_index: "Air Pollution Index",
  bmi: "BMI",
  oxygen_saturation: "O₂ Saturation (%)",
  fev1_x10: "FEV1 ×10",
  crp_level: "CRP Level",
  exercise_hours_per_week: "Exercise Hrs/Week",
  alcohol_units_per_week: "Alcohol Units/Week",
  education_years: "Education Years",
};

// State
let allData = [];
let brushedIDs = new Set();
let activeRisks = new Set([0, 1]);
let xField = "pack_years";
let yField = "age";

// Tooltip
const tooltip = d3.select("#tooltip");
function showTip(html, event) {
  tooltip.html(html).classed("show", true);
  moveTip(event);
}
function moveTip(event) {
  let x = event.clientX + 14, y = event.clientY - 10;
  if (x + 220 > window.innerWidth)  x = event.clientX - 230;
  if (y + 160 > window.innerHeight) y = event.clientY - 150;
  tooltip.style("left", x + "px").style("top", y + "px");
}
function hideTip() { tooltip.classed("show", false); }

// Helpers
function visibleData() {
  return allData.filter(d => activeRisks.has(d.lung_cancer_risk));
}
function isHighlighted(d) {
  return brushedIDs.size === 0 || brushedIDs.has(d._id);
}

// Load CSV data
d3.csv("../lung_cancer.csv").then(raw => {
  const numFields = [
    "age","gender","education_years","income_level","smoker","smoking_years",
    "cigarettes_per_day","pack_years","passive_smoking","air_pollution_index",
    "occupational_exposure","radon_exposure","family_history_cancer","copd",
    "asthma","previous_tb","chronic_cough","chest_pain","shortness_of_breath",
    "fatigue","bmi","oxygen_saturation","fev1_x10","crp_level","xray_abnormal",
    "exercise_hours_per_week","diet_quality","alcohol_units_per_week",
    "healthcare_access","lung_cancer_risk"
  ];
  raw.forEach((d, i) => {
    numFields.forEach(f => { d[f] = +d[f]; });
    d._id = i;
  });
  allData = raw;

  buildAxisSelectors();
  buildLegend();
  buildScatter();
  updateSelectionInfo();
});

// Axis selectors
function buildAxisSelectors() {
  function makeSelect(id, current) {
    const sel = d3.select(`#${id}`);
    sel.selectAll("option")
      .data(NUMERIC_FIELDS).enter()
      .append("option")
      .attr("value", d => d)
      .property("selected", d => d === current)
      .text(d => FIELD_LABELS[d] || d);
    sel.on("change", function() {
      if (id === "x-select") xField = this.value;
      else yField = this.value;
      brushedIDs.clear();
      rebuildScatter();
      updateSelectionInfo();
    });
  }
  makeSelect("x-select", xField);
  makeSelect("y-select", yField);
}

// Legend (risk filter)
function buildLegend() {
  const container = d3.select("#legend");
  [0, 1].forEach(risk => {
    const item = container.append("label")
      .attr("class", "legend-item")
      .style("cursor", "pointer");
    item.append("span")
      .attr("class", "legend-swatch")
      .style("background", RISK_COLORS[risk]);
    item.append("input")
      .attr("type", "checkbox")
      .attr("checked", true)
      .property("checked", true)
      .style("display", "none")
      .on("change", function() {
        if (this.checked) activeRisks.add(risk);
        else activeRisks.delete(risk);
        brushedIDs.clear();
        updateScatter();
        updateSelectionInfo();
      });
    item.append("span").text(RISK_LABELS[risk]);
    item.on("click", function() {
      const cb = item.select("input").node();
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event("change"));
      item.classed("dimmed", !cb.checked);
    });
  });
}

// Scatter plot state
let xS, yS, xSBase, ySBase, scatterG, scatterSvg;
let scatterW, scatterH;
let scatterMode = "brush";
let zoomTransform = d3.zoomIdentity;
let zoomBehaviour;
const SM = { top: 30, right: 24, bottom: 56, left: 64 };

function buildScatter() {
  const el = document.getElementById("panel-scatter");
  scatterW = el.clientWidth  - SM.left - SM.right;
  scatterH = el.clientHeight - 52 - SM.top - SM.bottom;

  scatterSvg = d3.select("#scatter-svg");

  // Clip path
  scatterSvg.append("defs").append("clipPath").attr("id", "scatter-clip")
    .append("rect").attr("width", scatterW).attr("height", scatterH);

  scatterG = scatterSvg.append("g")
    .attr("transform", `translate(${SM.left},${SM.top})`);

  buildScalesAndAxes();

  // Dots layer
  scatterG.append("g").attr("class", "dots")
    .attr("clip-path", "url(#scatter-clip)");
  updateScatterDots();

  // Brush
  const brush = d3.brush()
    .extent([[0, 0], [scatterW, scatterH]])
    .on("start brush", brushed)
    .on("end", brushEnd);
  scatterG.append("g").attr("class", "brush").call(brush);

  function brushed({ selection }) {
    if (!selection) return;
    const [[x0, y0], [x1, y1]] = selection;
    brushedIDs.clear();
    visibleData().forEach(d => {
      const cx = xS(d[xField]), cy = yS(d[yField]);
      if (cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1) brushedIDs.add(d._id);
    });
    updateScatter();
    updateSelectionInfo();
  }
  function brushEnd({ selection }) {
    if (!selection) {
      brushedIDs.clear();
      updateScatter();
      updateSelectionInfo();
    }
  }

  // Zoom
  zoomBehaviour = d3.zoom()
    .scaleExtent([0.5, 12])
    .translateExtent([[-scatterW, -scatterH], [2 * scatterW, 2 * scatterH]])
    .on("zoom", zoomed);

  scatterG.append("rect").attr("class", "zoom-rect")
    .attr("width", scatterW).attr("height", scatterH)
    .attr("fill", "transparent")
    .style("display", "none")
    .call(zoomBehaviour);

  function zoomed(event) {
    zoomTransform = event.transform;
    xS = zoomTransform.rescaleX(xSBase);
    yS = zoomTransform.rescaleY(ySBase);
    scatterG.select(".x-axis").transition().duration(0)
      .call(d3.axisBottom(xS).ticks(6)).call(styleAxis);
    scatterG.select(".y-axis").transition().duration(0)
      .call(d3.axisLeft(yS).ticks(6)).call(styleAxis);
    scatterG.select(".dots").selectAll("circle")
      .attr("cx", d => xS(d[xField]))
      .attr("cy", d => yS(d[yField]));
  }

  // Mode buttons
  d3.select("#btn-brush").on("click", () => setMode("brush"));
  d3.select("#btn-zoom").on("click", () => setMode("zoom"));
  d3.select("#btn-reset").on("click", resetZoom);
}

function buildScalesAndAxes() {
  const vis = allData;
  const xExt = d3.extent(vis, d => d[xField]);
  const yExt = d3.extent(vis, d => d[yField]);
  const xPad = (xExt[1] - xExt[0]) * 0.05 || 1;
  const yPad = (yExt[1] - yExt[0]) * 0.05 || 1;

  xSBase = d3.scaleLinear()
    .domain([xExt[0] - xPad, xExt[1] + xPad]).range([0, scatterW]);
  ySBase = d3.scaleLinear()
    .domain([yExt[0] - yPad, yExt[1] + yPad]).range([scatterH, 0]);
  xS = xSBase.copy();
  yS = ySBase.copy();

  // X axis
  if (scatterG.select(".x-axis").empty()) {
    scatterG.append("g").attr("class", "x-axis")
      .attr("transform", `translate(0,${scatterH})`)
      .call(d3.axisBottom(xS).ticks(6)).call(styleAxis);
    scatterG.append("text").attr("class", "ax-label ax-xlabel")
      .attr("x", scatterW / 2).attr("y", scatterH + 48)
      .attr("text-anchor", "middle")
      .attr("fill", "#94a3b8").attr("font-size", "12px");
  } else {
    scatterG.select(".x-axis").transition().duration(400)
      .call(d3.axisBottom(xS).ticks(6)).call(styleAxis);
  }
  // Y axis
  if (scatterG.select(".y-axis").empty()) {
    scatterG.append("g").attr("class", "y-axis")
      .call(d3.axisLeft(yS).ticks(6)).call(styleAxis);
    scatterG.append("text").attr("class", "ax-label ax-ylabel")
      .attr("transform", "rotate(-90)")
      .attr("x", -scatterH / 2).attr("y", -52)
      .attr("text-anchor", "middle")
      .attr("fill", "#94a3b8").attr("font-size", "12px");
  } else {
    scatterG.select(".y-axis").transition().duration(400)
      .call(d3.axisLeft(yS).ticks(6)).call(styleAxis);
  }
  scatterG.select(".ax-xlabel").text(FIELD_LABELS[xField] || xField);
  scatterG.select(".ax-ylabel").text(FIELD_LABELS[yField] || yField);
}
// Rebuild scatter plot
function rebuildScatter() {
  zoomTransform = d3.zoomIdentity;
  buildScalesAndAxes();
  scatterG.select(".zoom-rect").call(zoomBehaviour.transform, d3.zoomIdentity);
  updateScatterDots();
}

function styleAxis(g) {
  g.selectAll("text").attr("fill", "#94a3b8").attr("font-size", "11px");
  g.selectAll("line, path").attr("stroke", "#334155");
}
// Toggle between brush and zoom modes
function setMode(mode) {
  scatterMode = mode;
  scatterG.select(".brush")
    .style("pointer-events", mode === "brush" ? "all" : "none")
    .style("display", mode === "brush" ? null : "none");
  scatterG.select(".zoom-rect").style("display", mode === "zoom" ? null : "none");
  d3.select("#btn-brush").classed("active", mode === "brush");
  d3.select("#btn-zoom").classed("active",  mode === "zoom");
}
// Reset zoom to initial state
function resetZoom() {
  zoomTransform = d3.zoomIdentity;
  xS = xSBase.copy();
  yS = ySBase.copy();
  scatterG.select(".zoom-rect").call(zoomBehaviour.transform, d3.zoomIdentity);
  scatterG.select(".x-axis").transition().duration(500)
    .call(d3.axisBottom(xS).ticks(6)).call(styleAxis);
  scatterG.select(".y-axis").transition().duration(500)
    .call(d3.axisLeft(yS).ticks(6)).call(styleAxis);
  scatterG.select(".dots").selectAll("circle")
    .transition().duration(500)
    .attr("cx", d => xS(d[xField]))
    .attr("cy", d => yS(d[yField]));
}
// Update scatter dots based on visible data and brushed selection
function updateScatterDots() {
  const vis = visibleData();
  const dots = scatterG.select(".dots").selectAll("circle")
    .data(vis, d => d._id);

  dots.enter().append("circle")
    .attr("cx", d => xS(d[xField]))
    .attr("cy", d => yS(d[yField]))
    .attr("r", 0)
    .attr("fill", d => RISK_COLORS[d.lung_cancer_risk])
    .attr("opacity", 0)
    .attr("stroke", "#0f172a")
    .attr("stroke-width", 0.5)
    .on("mouseover", function(event, d) {
      d3.select(this).raise().transition().duration(80).attr("r", 7);
      showTip(`
        <strong>${RISK_LABELS[d.lung_cancer_risk]}</strong>
        Age: ${d.age} · BMI: ${d.bmi}<br>
        Pack Yrs: ${d.pack_years} · Cigs/Day: ${d.cigarettes_per_day}<br>
        O₂ Sat: ${d.oxygen_saturation}% · CRP: ${d.crp_level}<br>
        Air Pollution: ${d.air_pollution_index}
      `, event);
    })
    .on("mousemove", e => moveTip(e))
    .on("mouseout", function(event, d) {
      d3.select(this).transition().duration(80)
        .attr("r", isHighlighted(d) ? 4.5 : 3);
      hideTip();
    })
    .transition().duration(400)
    .attr("r", 4.5)
    .attr("opacity", d => isHighlighted(d) ? 0.82 : 0.1);

  dots.transition().duration(300)
    .attr("cx", d => xS(d[xField]))
    .attr("cy", d => yS(d[yField]))
    .attr("fill", d => RISK_COLORS[d.lung_cancer_risk])
    .attr("opacity", d => isHighlighted(d) ? 0.82 : 0.1)
    .attr("r", d => isHighlighted(d) ? 4.5 : 3);

  dots.exit().transition().duration(300)
    .attr("r", 0).attr("opacity", 0).remove();
}

function updateScatter() { updateScatterDots(); }
// Selection info
function updateSelectionInfo() {
  const el = document.getElementById("selected-info");
  const vis = visibleData();
  if (brushedIDs.size > 0) {
    const atRisk = [...brushedIDs].filter(id => {
      const d = allData.find(r => r._id === id);
      return d && d.lung_cancer_risk === 1;
    }).length;
    el.textContent = `${brushedIDs.size} selected · ${atRisk} at risk`;
    el.style.color = "#f87171";
  } else {
    const atRisk = vis.filter(d => d.lung_cancer_risk === 1).length;
    el.textContent = `${vis.length} patients · ${atRisk} at risk (${Math.round(atRisk / vis.length * 100)}%)`;
    el.style.color = "#94a3b8";
  }
}