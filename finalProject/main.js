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
        .text("TEXT FOR PAGE 2")
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

    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", height - 110)
        .text("CAPTION FOR PAGE 5")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //Page 5 - Scatterplot
    //CONTENT FOR PAGE 5 START

    const RISK_COLORS = { 0: "#4ade80", 1: "#f87171" };
    const RISK_LABELS  = { 0: "Not Elevated Lung Cancer Risk", 1: "Elevated Lung Cancer Risk" };
 
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
 
    // Scatterplot state
    let scAllData    = [];
    let scBrushedIDs = new Set();
    let scActiveRisks = new Set([0, 1]);
    let scXField = "pack_years";
    let scYField = "age";
    let scXS, scYS, scXSBase, scYSBase, scG, scSvg;
    let scW, scH;
    let scMode = "brush";
    let scZoomTransform = d3.zoomIdentity;
    let scZoomBehaviour;
    const SC_M = { top: 60, right: 30, bottom: 110, left: 80 };
 
    // ── Tooltip (HTML overlay, shown on top of SVG) ──
    const scTipDiv = d3.select("body").append("div")
        .attr("id", "sc-tooltip")
        .style("position", "fixed")
        .style("background", "#1e293b")
        .style("color", "#f1e3dd")
        .style("border", "1px solid #334155")
        .style("border-radius", "6px")
        .style("padding", "8px 12px")
        .style("font-size", "13px")
        .style("pointer-events", "none")
        .style("display", "none")
        .style("z-index", "999");
 
    function scShowTip(html, event) {
        scTipDiv.html(html).style("display", "block");
        scMoveTip(event);
    }
    function scMoveTip(event) {
        let x = event.clientX + 14, y = event.clientY - 10;
        if (x + 240 > window.innerWidth)  x = event.clientX - 250;
        if (y + 120 > window.innerHeight) y = event.clientY - 120;
        scTipDiv.style("left", x + "px").style("top", y + "px");
    }
    function scHideTip() { scTipDiv.style("display", "none"); }
 
    function scVisibleData() {
        return scAllData.filter(d => scActiveRisks.has(d.lung_cancer_risk));
    }
    function scIsHighlighted(d) {
        return scBrushedIDs.size === 0 || scBrushedIDs.has(d._id);
    }
 
    // Page title 
    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 35)
        .text("Interactive Scatterplot: Feature Comparison")
        .style("font-size", "32px")
        .attr("alignment-baseline", "middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);
    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 60)
        .text("Hover over a dot to view a patient's health metrics. Green dots represent patients not at elevated risk, red dots represent patients at elevated risk.")
        .style("font-size", "16px")
        .attr("alignment-baseline", "middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3ddde")
        .style("opacity", 0);
 
    const controlsHeight = 52;
    const controlsFO = page5.append("foreignObject")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 70)
        .attr("width", width - 220)
        .attr("height", controlsHeight)
        .style("opacity", 0)
        .style("pointer-events", "none");
 
    const controlsDiv = controlsFO.append("xhtml:div")
        .style("display", "flex")
        .style("align-items", "center")
        .style("gap", "18px")
        .style("font-family", "sans-serif")
        .style("font-size", "14px")
        .style("color", "#f1e3dd");
 
    // Helper
    function makeSelectEl(defaultField) {
        const sel = controlsDiv.append("xhtml:select")
            .style("background", "#334155")
            .style("color", "#f1e3dd")
            .style("border", "1px solid #475569")
            .style("border-radius", "4px")
            .style("padding", "4px 8px")
            .style("font-size", "13px")
            .style("cursor", "pointer");
        NUMERIC_FIELDS.forEach(f => {
            sel.append("xhtml:option")
                .attr("value", f)
                .property("selected", f === defaultField)
                .text(FIELD_LABELS[f] || f);
        });
        return sel;
    }
 
    controlsDiv.append("xhtml:span").text("X Axis:");
    const xSelectEl = makeSelectEl("pack_years");
 
    controlsDiv.append("xhtml:span").text("Y Axis:");
    const ySelectEl = makeSelectEl("age");
 
    // Divider
    controlsDiv.append("xhtml:span")
        .style("border-left", "1px solid #475569")
        .style("height", "28px")
        .style("margin", "0 4px");
 
    // Legend/risk toggles
    [0, 1].forEach(risk => {
        const lbl = controlsDiv.append("xhtml:label")
            .style("display", "flex")
            .style("align-items", "center")
            .style("gap", "6px")
            .style("cursor", "pointer")
            .attr("id", `sc-legend-${risk}`);
 
        lbl.append("xhtml:span")
            .style("display", "inline-block")
            .style("width", "14px")
            .style("height", "14px")
            .style("border-radius", "50%")
            .style("background", RISK_COLORS[risk]);
 
        const cb = lbl.append("xhtml:input")
            .attr("type", "checkbox")
            .property("checked", true)
            .style("display", "none");
 
        lbl.append("xhtml:span").text(RISK_LABELS[risk]);
 
        lbl.on("click", function() {
            const node = cb.node();
            node.checked = !node.checked;
            if (node.checked) scActiveRisks.add(risk);
            else              scActiveRisks.delete(risk);
            lbl.style("opacity", node.checked ? "1" : "0.4");
            scBrushedIDs.clear();
            scUpdateScatter();
            scUpdateInfo();
        });
    });
 
    // Divider
    controlsDiv.append("xhtml:span")
        .style("border-left", "1px solid #475569")
        .style("height", "28px")
        .style("margin", "0 4px");
 
    // Mode buttons
    function modeBtn(label, id) {
        return controlsDiv.append("xhtml:button")
            .attr("id", id)
            .text(label)
            .style("background", "#334155")
            .style("color", "#f1e3dd")
            .style("border", "1px solid #475569")
            .style("border-radius", "4px")
            .style("padding", "4px 12px")
            .style("font-size", "13px")
            .style("cursor", "pointer");
    }
    const btnBrush = modeBtn("Brush", "sc-btn-brush");
    const btnZoom  = modeBtn("Zoom",  "sc-btn-zoom");
    const btnReset = modeBtn("Reset", "sc-btn-reset");
 
    // Info text
    const infoFO = page5.append("foreignObject")
        .attr("class", "page5")
        .attr("x", 1600)
        .attr("y", 100)
        .attr("width", width - 220)
        .attr("height", 40)
        .style("opacity", 0)
        .style("pointer-events", "none");
 
    const infoDiv = infoFO.append("xhtml:div")
        .attr("id", "sc-info")
        .style("font-family", "sans-serif")
        .style("font-size", "13px")
        .style("color", "#94a3b8");
 
    // SVG chart area 
    scW = width - 220 - SC_M.left - SC_M.right;
    scH = height - controlsHeight - 70 - SC_M.top - SC_M.bottom - 60;
 
    // Clip-path def 
    svg0.append("defs").append("clipPath").attr("id", "sc-clip")
        .append("rect").attr("width", scW).attr("height", scH);
 
    scSvg = page5.append("g")
        .attr("class", "page5")
        .attr("transform", `translate(${50 + SC_M.left}, ${20 + controlsHeight + SC_M.top})`);
 
    scG = scSvg;
 
    // Build scales & axes
    function scBuildScalesAndAxes() {
        const xExt = d3.extent(scAllData, d => d[scXField]);
        const yExt = d3.extent(scAllData, d => d[scYField]);
        const xPad = (xExt[1] - xExt[0]) * 0.05 || 1;
        const yPad = (yExt[1] - yExt[0]) * 0.05 || 1;
 
        scXSBase = d3.scaleLinear()
            .domain([xExt[0] - xPad, xExt[1] + xPad]).range([0, scW]);
        scYSBase = d3.scaleLinear()
            .domain([yExt[0] - yPad, yExt[1] + yPad]).range([scH, 0]);
        scXS = scXSBase.copy();
        scYS = scYSBase.copy();
 
        function scStyleAxis(g) {
            g.selectAll("text").attr("fill", "#000000").attr("font-size", "11px");
            g.selectAll("line, path").attr("stroke", "#000000");
        }
 
        if (scG.select(".sc-x-axis").empty()) {
            scG.append("g").attr("class", "sc-x-axis")
                .attr("transform", `translate(0,${scH})`)
                .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
 
            scG.append("text").attr("class", "sc-xlabel")
                .attr("x", scW / 2).attr("y", scH + 52)
                .attr("text-anchor", "middle")
                .attr("fill", "#000000").attr("font-size", "13px");
 
            scG.append("g").attr("class", "sc-y-axis")
                .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
 
            scG.append("text").attr("class", "sc-ylabel")
                .attr("transform", "rotate(-90)")
                .attr("x", -scH / 2).attr("y", -58)
                .attr("text-anchor", "middle")
                .attr("fill", "#000000").attr("font-size", "13px");
        } else {
            scG.select(".sc-x-axis").transition().duration(400)
                .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
            scG.select(".sc-y-axis").transition().duration(400)
                .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
        }
        scG.select(".sc-xlabel").text(FIELD_LABELS[scXField] || scXField);
        scG.select(".sc-ylabel").text(FIELD_LABELS[scYField] || scYField);
    }
 
    // ── Dots ──
    function scUpdateDots() {
        const vis = scVisibleData();
        const dots = scG.select(".sc-dots").selectAll("circle")
            .data(vis, d => d._id);
 
        dots.enter().append("circle")
            .attr("cx", d => scXS(d[scXField]))
            .attr("cy", d => scYS(d[scYField]))
            .attr("r", 0)
            .attr("fill", d => RISK_COLORS[d.lung_cancer_risk])
            .attr("opacity", 0)
            .attr("stroke", "#0f172a")
            .attr("stroke-width", 0.5)
            .on("mouseover", function(d) {
                const event = d3.event;
                d3.select(this).raise().transition().duration(80).attr("r", 7);
                scShowTip(`
                    <strong>${RISK_LABELS[d.lung_cancer_risk]}</strong><br>
                    Age: ${d.age} · BMI: ${d.bmi}<br>
                    Pack Yrs: ${d.pack_years} · Cigs/Day: ${d.cigarettes_per_day}<br>
                    O₂ Sat: ${d.oxygen_saturation}% · CRP: ${d.crp_level}<br>
                    Air Pollution: ${d.air_pollution_index}
                `, event);
            })
            .on("mousemove", function() { scMoveTip(d3.event); })
            .on("mouseout", function(d) {
                d3.select(this).transition().duration(80)
                    .attr("r", scIsHighlighted(d) ? 4.5 : 3);
                scHideTip();
            })
            .transition().duration(400)
            .attr("r", 4.5)
            .attr("opacity", d => scIsHighlighted(d) ? 0.82 : 0.1);
 
        dots.transition().duration(300)
            .attr("cx", d => scXS(d[scXField]))
            .attr("cy", d => scYS(d[scYField]))
            .attr("fill", d => RISK_COLORS[d.lung_cancer_risk])
            .attr("opacity", d => scIsHighlighted(d) ? 0.82 : 0.1)
            .attr("r", d => scIsHighlighted(d) ? 4.5 : 3);
 
        dots.exit().transition().duration(300)
            .attr("r", 0).attr("opacity", 0).remove();
    }
 
    function scUpdateScatter() { scUpdateDots(); }
 
    //Selection info
    function scUpdateInfo() {
        const vis = scVisibleData();
        const node = document.getElementById("sc-info");
        if (!node) return;
        if (scBrushedIDs.size > 0) {
            const atRisk = [...scBrushedIDs].filter(id => {
                const d = scAllData.find(r => r._id === id);
                return d && d.lung_cancer_risk === 1;
            }).length;
            node.textContent = `${scBrushedIDs.size} selected · ${atRisk} at risk`;
            node.style.color = "#f87171";
        } else {
            const atRisk = vis.filter(d => d.lung_cancer_risk === 1).length;
            const pct = vis.length ? Math.round(atRisk / vis.length * 100) : 0;
            node.textContent = `${vis.length} patients · ${atRisk} at risk (${pct}%)`;
            node.style.color = "#94a3b8";
        }
    }
 
    // Set interaction mode
    function scSetMode(mode) {
        scMode = mode;
        scG.select(".sc-brush")
            .style("pointer-events", mode === "brush" ? "all" : "none")
            .style("display", mode === "brush" ? null : "none");
        scG.select(".sc-zoom-rect")
            .style("display", mode === "zoom" ? null : "none");
        btnBrush.style("background", mode === "brush" ? "#4f6a8f" : "#334155");
        btnZoom.style("background",  mode === "zoom"  ? "#4f6a8f" : "#334155");
    }
 
    //Reset zoom
    function scResetZoom() {
        scZoomTransform = d3.zoomIdentity;
        scXS = scXSBase.copy();
        scYS = scYSBase.copy();
        scG.select(".sc-zoom-rect").call(scZoomBehaviour.transform, d3.zoomIdentity);
 
        function scStyleAxis(g) {
            g.selectAll("text").attr("fill", "#000000").attr("font-size", "11px");
            g.selectAll("line, path").attr("stroke", "#000000");
        }
        scG.select(".sc-x-axis").transition().duration(500)
            .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
        scG.select(".sc-y-axis").transition().duration(500)
            .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
        scG.select(".sc-dots").selectAll("circle")
            .transition().duration(500)
            .attr("cx", d => scXS(d[scXField]))
            .attr("cy", d => scYS(d[scYField]));
    }
 
    //Rebuild after axis change
    function scRebuild() {
        scZoomTransform = d3.zoomIdentity;
        scBuildScalesAndAxes();
        scG.select(".sc-zoom-rect").call(scZoomBehaviour.transform, d3.zoomIdentity);
        scUpdateDots();
    }
 
    // Build the full scatter
    function scBuild() {
        scBuildScalesAndAxes();
 
        // Dots layer
        scG.append("g").attr("class", "sc-dots")
            .attr("clip-path", "url(#sc-clip)");
        scUpdateDots();
 
        // Brush
        const brush = d3.brush()
            .extent([[0, 0], [scW, scH]])
            .on("start brush", function() {
                const sel = d3.event.selection;
                if (!sel) return;
                const [[x0, y0], [x1, y1]] = sel;
                scBrushedIDs.clear();
                scVisibleData().forEach(d => {
                    const cx = scXS(d[scXField]), cy = scYS(d[scYField]);
                    if (cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1)
                        scBrushedIDs.add(d._id);
                });
                scUpdateScatter();
                scUpdateInfo();
            })
            .on("end", function() {
                if (!d3.event.selection) {
                    scBrushedIDs.clear();
                    scUpdateScatter();
                    scUpdateInfo();
                }
            });
 
        scG.append("g").attr("class", "sc-brush").call(brush);
 
        // Zoom
        scZoomBehaviour = d3.zoom()
            .scaleExtent([0.5, 12])
            .translateExtent([[-scW, -scH], [2 * scW, 2 * scH]])
            .on("zoom", function() {
                function scStyleAxis(g) {
                    g.selectAll("text").attr("fill", "#000000").attr("font-size", "11px");
                    g.selectAll("line, path").attr("stroke", "#000000");
                }
                scZoomTransform = d3.event.transform;
                scXS = scZoomTransform.rescaleX(scXSBase);
                scYS = scZoomTransform.rescaleY(scYSBase);
                scG.select(".sc-x-axis").transition().duration(0)
                    .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
                scG.select(".sc-y-axis").transition().duration(0)
                    .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
                scG.select(".sc-dots").selectAll("circle")
                    .attr("cx", d => scXS(d[scXField]))
                    .attr("cy", d => scYS(d[scYField]));
            });
 
        scG.append("rect").attr("class", "sc-zoom-rect")
            .attr("width", scW).attr("height", scH)
            .attr("fill", "transparent")
            .style("display", "none")
            .call(scZoomBehaviour);
 
        // Wire up controls
        xSelectEl.on("change", function() {
            scXField = this.value;
            scBrushedIDs.clear();
            scRebuild();
            scUpdateInfo();
        });
        ySelectEl.on("change", function() {
            scYField = this.value;
            scBrushedIDs.clear();
            scRebuild();
            scUpdateInfo();
        });
 
        btnBrush.on("click", function() { scSetMode("brush"); });
        btnZoom.on("click",  function() { scSetMode("zoom"); });
        btnReset.on("click", function() { scResetZoom(); });
 
        // Default: brush mode active
        scSetMode("brush");
        scUpdateInfo();
    }
 
    // Load data for scatter
    d3.csv("lung_cancer.csv").then(function(raw) {
        const numFields = [
            "age","gender","education_years","income_level","smoker","smoking_years",
            "cigarettes_per_day","pack_years","passive_smoking","air_pollution_index",
            "occupational_exposure","radon_exposure","family_history_cancer","copd",
            "asthma","previous_tb","chronic_cough","chest_pain","shortness_of_breath",
            "fatigue","bmi","oxygen_saturation","fev1_x10","crp_level","xray_abnormal",
            "exercise_hours_per_week","diet_quality","alcohol_units_per_week",
            "healthcare_access","lung_cancer_risk"
        ];
        raw.forEach(function(d, i) {
            numFields.forEach(function(f) { d[f] = +d[f]; });
            d._id = i;
        });
        scAllData = raw;
        scBuild();
    }).catch(function(err) {
        console.error("Error loading lung_cancer.csv for scatter:", err);
    });
 
    // Start page5 hidden
    d3.selectAll(".page5").style("opacity", 0).style("pointer-events", "none");

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
