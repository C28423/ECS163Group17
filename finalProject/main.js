const width = window.innerWidth;
console.log(width);
const height = window.innerHeight;
console.log(height);


//Background color
document.body.style.background = "#2F353B";

//COLOR PALETTE HEX CODES
//Color 0: #2F353B (Background)
//Color 1: #bccad6 (not used)
//Color 2: #b5c1d5 (Buttons)
//Color 3: #ccd6e7 (Buttons, highlighted)
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
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("pointer-events", "none")
    .style("opacity", 1);


    //PAGE 1 - Intro & Background Information. Text about logistic regression and a graphic about it if we have time.
    //CONTENT FOR PAGE 1 START
    page1.append("text")
        .attr("class", "page1")
        .attr("x", 50)
        .attr("y", 80)
        .text("Lung Cancer Risk Factors")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("fill", "#f1e3dd");
    
    page1.append("text")
        

    page1.append("foreignObject")
        .attr("class", "page1")
        .attr("x", 0)
        .attr("y", 150)
        .attr("width", width-200)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`
            <p>Lung cancer is one of the leading causes of cancer-related deaths worldwide.</p>

            <p>Using a dataset of health metrics, we aim to visualize factors that affect lung cancer risk.</p>

            <p>This dataset is important because it contains a large and diverse set of real-world health, lifestyle, and environmental measurements across thousands of individuals. By capturing multiple dimensions of a person's daily life and physical condition, it allows us to study how different factors interact rather than looking at them in isolation.</p>

            <p>We've used the dataset to train a logistic regression machine learning model. This works by feeding the model data from the dataset, and it learns which features can be used to predict lung cancer risk based on the target variable. This is expressed through coefficients, which represent significance in the outcome, and odds ratios, which communicate whether a higher value increases or decreases lung cancer risk based on whether the ratio is above or below 1.</p>

            <p>Based on the model's coefficients & odds ratios, we've identified top contributing factors. We visualize features using the following.</p>
            
            <p>Scatterplot: We compare different features against each other to get an idea of how they interact.</p>
            <p>Parallel Coordinate Plot 1: We visualize some of these top factors and show their connection to lung cancer risk.</p>
            <p>Parallel Coordinate Plot 2: We visualize coefficients of different factors to compare them.</p>
        `);
    //CONTENT FOR PAGE 1 END

const page2 = svg0.append("g")
    .attr("class", "page2")
    .attr("height", height)
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("opacity", 0)
    .style("pointer-events", "none");

    //Page 2 - Static Scatterplot and related insight text.
    //CONTENT FOR PAGE 2 START
    page2.append("text")
        .attr("class", "page2")
        .attr("x", 50)
        .attr("y", 80)
        .text("Scatterplot Insight")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("fill", "#f1e3dd");
    
    // Placeholder for static scatterplot, image url pulled from random site as example, will replace with our own
    // scatterplot image once we have it ready. (can convert to url from local image file if needed)

    page2.append("foreignObject")
        .attr("class", "page2")
        .attr("x", 0)
        .attr("y", 150)
        .attr("width", width-200)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(` 
        <p>Feature connection example: Oxygen Saturation and Average Cigarettes Per Day</p>
        <p>Viewing features in connection with each other can provide insights missed by analyzing them separately.</p>
        <p>In this view of our scatterplot, you can see that a high number of cigarettes per day will generally indicate an increased risk of lung cancer. This is consistent with our coefficient findings. However, it's important to note that if oxygen saturation is high, cigarettes per day may not be an effective indicator of increased risk, even if it is high.</p>
        `);

    page2.append("image")
            .attr("class", "page2")
            .attr("href", "Images/scatterPlotInsight.png")
            .attr("x", 0)
            .attr("y", height/2)
            .attr("width", width/2)
            .attr("height", height/2);

    //CONTENT FOR PAGE 2 END

const page3 = svg0.append("g")
    .attr("class", "page3")
    .attr("height", height)
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("opacity", 0)
    .style("pointer-events", "none");

    //Static Parallel Coordinates and related insight text.
    //CONTENT FOR PAGE 3 START
    page3.append("text")
        .attr("class", "page3")
        .attr("x", 50)
        .attr("y", 80)
        .text("Parallel Coordinate Insights")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("fill", "#f1e3dd");
    
    page3.append("foreignObject")
        .attr("class", "page3")
        .attr("x", 0)
        .attr("y", height - 200)
        .attr("width", width-200)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`
            <p>Placeholder text for Page 3</p>
        `);

    page3.append("foreignObject")
        .attr("class", "page3")
        .attr("x", 0)
        .attr("y", 150)
        .attr("width", width/2 - 100)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(` 
        <p>Parallel Coordinate Plot 1: Narrowing our view to just patients at low risk, we can observe the importance of FEV1 and Oxygen Saturation in decreased likelihood of increased risk. All low risk patients have higher values of these.</p>
        `);

    page3.append("image")
            .attr("class", "page3")
            .attr("href", "Images/parallelcoord1Insight.png")
            .attr("x", 0)
            .attr("y", height/2)
            .attr("width", width/2 - 50)
            .attr("height", height/2);

    page3.append("foreignObject")
        .attr("class", "page3")
        .attr("x", width/2)
        .attr("y", 150)
        .attr("width", width/2 - 100)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "25px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(` 
        <p>Parallel Coordinate Plot 2: Focusing on Absolute Coefficients, we can see that features in this dataset can be roughly divided into features with a < 0.25 absolute coefficient which do not provide significant insight into lung cancer risk, and those with > 0.25 which are useful for assessing risk. In the interactive portion, feel free to view individual features.</p>
        `);

    page3.append("image")
            .attr("class", "page3")
            .attr("href", "Images/parallelcoord2Insight.png")
            .attr("x", width/2 - 50)
            .attr("y", height/2)
            .attr("width", width/2 - 100)
            .attr("height", height/2);

    //CONTENT FOR PAGE 3 END

const page4 = svg0.append("g")
    .attr("class", "page4")
    .attr("height", height)
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("opacity", 0)
    .style("pointer-events", "none");
    
    //Page 4 - Summary of insights.
    //CONTENT FOR PAGE 4 START
    page4.append("text")
        .attr("class", "page4")
        .attr("x", 50)
        .attr("y", 80)
        .text("Understanding the Data: Key Risk Factors for Lung Cancer")
        .style("font-size", "50px")
        .attr("alignment-baseline","middle")
        .style("fill", "#f1e3dd");

    page4.append("foreignObject")
        .attr("class", "page4")
        .attr("x", 0)
        .attr("y", 100)
        .attr("width", width-250)
        .attr("height",  height - 200)
        .append("xhtml:div")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`
            <p>Our dataset has a number of features. Some of the labels aren't self explanatory; we include the full labels as listed on Kaggle here for clarity.</p>
            <p>We use a select number of these features for our scatterplot and parallel coordinate graph 1, and they are all present in parallel coordinate graph 2 to display the signficance of each feature for determining the target variable.</p>
        `);

    page4.append("foreignObject")
        .attr("class", "page4")
        .attr("x", 0)
        .attr("y", 220)
        .attr("width", width/4)
        .attr("height",  height)
        .append("xhtml:div")
        .style("font-size", `${width * 0.012}px`)
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`
            <ul>
            <li>age - Age of the individual in years</li>
            <li>gender - Biological sex (0 = Female, 1 = Male)</li>
            <li>education_years - Total years of formal education completed</li>
            <li>income_level - Socioeconomic status on an ordinal scale (1 = lowest, 5 = highest)</li>
            <li>smoker - Indicates whether the individual has a history of smoking (0 = No, 1 = Yes)</li>
            <li>smoking_years - Total number of years the individual has smoked</li>
            <li>cigarettes_per_day - Average number of cigarettes smoked per day</li>
            <li>pack_years - Cumulative smoking exposure combining duration and intensity</li>
            <li>passive_smoking	- Exposure to secondhand smoke (0 = No, 1 = Yes)</li>
            <li>air_pollution_index - Air quality index representing long-term pollution exposure</li>
            <li>occupational_exposure - Exposure to hazardous substances at work (0 = No, 1 = Yes)</li>
            <li>radon_exposure - History of radon exposure (0 = No, 1 = Yes)</li>
            <li>family_history_cancer - Family history of cancer (0 = No, 1 = Yes)</li>
            <li>copd - Diagnosis of chronic obstructive pulmonary disease (0 = No, 1 = Yes)</li>
            <li>asthma - History of asthma (0 = No, 1 = Yes)</li>
            </ul>
        `);

        page4.append("foreignObject")
        .attr("class", "page4")
        .attr("x", width/2 - 100)
        .attr("y", 220)
        .attr("width", width/4)
        .attr("height",  height)
        .append("xhtml:div")
        .style("font-size", `${width * 0.012}px`)
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`
            <ul>
            <li>previous_tb - History of tuberculosis infection (0 = No, 1 = Yes)</li>
            <li>chronic_cough - Presence of long-term cough symptoms (0 = No, 1 = Yes)</li>
            <li>chest_pain - Reports of chest pain (0 = No, 1 = Yes)</li>
            <li>shortness_of_breath - Presence of breathing difficulty (0 = No, 1 = Yes)</li>
            <li>fatigue - Persistent fatigue symptoms (0 = No, 1 = Yes)</li>
            <li>bmi - Body mass index category value</li>
            <li>oxygen_saturation - Blood oxygen saturation level (%)</li>
            <li>fev1_x10 - Lung function measure derived from forced expiratory volume</li>
            <li>crp_level - C-reactive protein level indicating inflammation</li>
            <li>xray_abnormal - Abnormal findings in chest imaging (0 = No, 1 = Yes)</li>
            <li>exercise_hours_per_week	- Average weekly physical activity duration</li>
            <li>diet_quality - Overall dietary quality score (1 = poor, 5 = excellent)</li>
            <li>alcohol_units_per_week - Average alcohol consumption per week</li>
            <li>healthcare_access - Access to healthcare services (1 = poor, 5 = excellent)</li>
            <li>lung_cancer_risk - Target variable indicating elevated lung cancer risk (0 = No, 1 = Yes)</li>
            </ul>
        `);
    

    //CONTENT FOR PAGE 4 END

const page5 = svg0.append("g")
    .attr("class", "page5")
    .attr("height", height)
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("opacity", 0)
    .style("pointer-events", "none");

    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", height - 110)
        .text("Interactive Scatterplot, blue dots represent patients not at elevated risk, red dots represent patients at elevated risk. Double click with zoom selected to zoom.")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("fill", "#f1e3dd");

    //Page 5 - Scatterplot
    //CONTENT FOR PAGE 5 START

    const RISK_COLORS = { 0: "#71d4f8", 1: "#f87171" };
    const RISK_LABELS  = { 0: "Not Elevated Lung Cancer Risk", 1: "Elevated Lung Cancer Risk" };
 
    const NUMERIC_FIELDS = [
        "age", "smoking_years", "cigarettes_per_day", "pack_years",
        "air_pollution_index", "bmi", "oxygen_saturation",
        "fev1_x10", "crp_level", "exercise_hours_per_week",
        "alcohol_units_per_week", "education_years"
    ];
    const FIELD_LABELS = {
        age: "Age - patient age in years",
        smoking_years: "Smoking Years - years the patient has smoked",
        cigarettes_per_day: "Cigarettes/Day - average cigarettes smoked per day",
        pack_years: "Pack Years - cumulative smoking exposure",
        air_pollution_index: "Air Pollution Index - local air pollution exposure",
        bmi: "BMI - body mass index",
        oxygen_saturation: "O₂ Saturation (%) - blood oxygen level",
        fev1_x10: "FEV1 ×10 - lung function / forced expiratory volume",
        crp_level: "CRP Level - inflammation marker",
        exercise_hours_per_week: "Exercise Hrs/Week - weekly exercise hours",
        alcohol_units_per_week: "Alcohol Units/Week - weekly alcohol units",
        education_years: "Education Years - years of schooling",
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
        .style("fill", "#f1e3dd");
    page5.append("text")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 60)
        .text("Click and drag to select points. Use the controls to change axes and filter by risk.")
        .style("font-size", "16px")
        .attr("alignment-baseline", "middle")
        .style("fill", "#f1e3ddde");
 
    const controlsHeight = 52;
    const controlsFO = page5.append("foreignObject")
        .attr("class", "page5")
        .attr("x", 50)
        .attr("y", 70)
        .attr("width", width - 220)
        .attr("height", controlsHeight);
 
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
        .style("border-left", "1px solid #f1e3dd")
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
        .attr("height", 40);
 
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
            g.selectAll("text").attr("fill", "#f1e3dd").attr("font-size", "11px");
            g.selectAll("line, path").attr("stroke", "#f1e3dd");
        }
 
        if (scG.select(".sc-x-axis").empty()) {
            scG.append("g").attr("class", "sc-x-axis")
                .attr("transform", `translate(0,${scH})`)
                .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
 
            scG.append("text").attr("class", "sc-xlabel")
                .attr("x", scW / 2).attr("y", scH + 52)
                .attr("text-anchor", "middle")
                .attr("fill", "#f1e3dd").attr("font-size", "20px");
 
            scG.append("g").attr("class", "sc-y-axis")
                .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
 
            scG.append("text").attr("class", "sc-ylabel")
                .attr("transform", "rotate(-90)")
                .attr("x", -scH / 2).attr("y", -58)
                .attr("text-anchor", "middle")
                .attr("fill", "#f1e3dd").attr("font-size", "20px");
        } else {
            scG.select(".sc-x-axis").transition().duration(400)
                .call(d3.axisBottom(scXS).ticks(6)).call(scStyleAxis);
            scG.select(".sc-y-axis").transition().duration(400)
                .call(d3.axisLeft(scYS).ticks(6)).call(scStyleAxis);
        }
        scG.select(".sc-xlabel").text(FIELD_LABELS[scXField] || scXField);
        scG.select(".sc-ylabel").text(FIELD_LABELS[scYField] || scYField);
    }
 
    //Dots
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
            g.selectAll("text").attr("fill", "#f1e3dd").attr("font-size", "11px");
            g.selectAll("line, path").attr("stroke", "#f1e3dd");
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
 
        scG.append("g").attr("class", "sc-brush").call(brush)
            .call(brush)
            .style("pointer-events", "none")
            .style("display", "none");
 
        // Zoom
        scZoomBehaviour = d3.zoom()
            .scaleExtent([0.5, 12])
            .translateExtent([[-scW, -scH], [2 * scW, 2 * scH]])
            .on("zoom", function() {
                function scStyleAxis(g) {
                    g.selectAll("text").attr("fill", "#f1e3dd").attr("font-size", "11px");
                    g.selectAll("line, path").attr("stroke", "#f1e3dd");
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
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`)
    .style("opacity", 0)
    .style("pointer-events", "none");

    //Page 6 - Parallel Coordinates 1
    //CONTENT FOR PAGE 6 START   
    
     page6.append("foreignObject")
        .attr("class", "page6")
        .attr("x", 50)
        .attr("y", height - 120)
        .attr("width", width - 200)
        .attr("height", height - 200)
        .append("xhtml:div")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("color", "#f1e3dd")
        .html(`

            <p>Each line represents an individual patient profile across nine quantitative variables, color-coded by the categorical outcome of Cancer Risk (red for High Risk, blue for Low Risk).</p>
            <p>Parallel coordinates plot for lung cancer risk factors. Each line represents the data of 1 patient. For more information on the axis labels, go back to page 4.</p>
        `);

// Define 2 colors to represent the outputs:
// red for high risk, blue for low risk
const riskColor = {
  1: "#f87171",
  0: "#71d4f8",
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
const pw = width - margin.left - margin.right - 180;
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
        .attr("stroke", "#f1e3dd")
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
        .attr("fill", "#f1e3dd");

      axG
        .selectAll(".domain, .tick line")
        .attr("stroke", "#f1e3dd")
        .attr("stroke-width", 1.5);

      axG
        .append("text")
        .attr("y", ph + 30)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#f1e3dd")
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
        return py >= y0 && py <= y1 ? 0.85 : 0.01;
      });
    };

    // Chart title
    g.append("text")
      .attr("x", pw / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#f1e3dd")
      .text("Lung Cancer Risk Factors — Parallel Coordinates Plot");

    // Brush instructions
    g.append("text")
      .attr("x", pw / 2)
      .attr("y", -25)
      .attr("text-anchor", "middle")
      .attr("font-size", "15px")
      .attr("fill", "#f1e3dd")
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
      .attr("fill", "#f1e3dd")
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
        .attr("fill", "#f1e3dd")
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
    .attr("width", width - 200)
    .attr("transform", `translate(100, 0)`);

    //Page 7 - Parallel Coordinates 2
    //CONTENT FOR PAGE 7 START
    const page7Plot = page7.append("g")
        .attr("class", "page7-plot")
        .attr("transform", "translate(0, 0)")
        .style("opacity", 0)
        .style("pointer-events", "none");

    d3.csv("lrModelLungCancer.csv").then(data => {
    console.log("data loaded", data);

    // finds absolute value of the coefficient 
    // determines the strength of the predictors
    data.forEach(d => {
        d.Coefficient = +d.Coefficient;
        d["Odds Ratio"] = +d["Odds Ratio"];
        d.AbsCoefficient = Math.abs(d.Coefficient);
    });

    const dimensions = [
        "Coefficient",
        "Odds Ratio",
        "AbsCoefficient"
    ];

    data = data.filter(d =>
        dimensions.every(dim => !isNaN(d[dim]))
    );

    const plotWidth = width - 180;
    const plotHeight = height - 180;

    const margin = {
        top: 50,
        right: 90,
        bottom: -30,
        left: 60
    };

    const innerWidth = plotWidth - margin.left - margin.right;
    const innerHeight = plotHeight - margin.top - margin.bottom;

    const g = page7Plot.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scalePoint()
        .domain(dimensions)
        .range([0, innerWidth]);

    const y = {};

    dimensions.forEach(dim => {

        const extent = d3.extent(data, d => d[dim]);

        data.forEach(d => {
            d[dim + "_norm"] =
                (d[dim] - extent[0]) /
                (extent[1] - extent[0]);
        });

        y[dim] = d3.scaleLinear()
            .domain(extent)
            .range([innerHeight, 0]);
    });

    function path(d) {
        return d3.line()(
            dimensions.map(p => [
                x(p),
                innerHeight - d[p + "_norm"] * innerHeight
            ])
        );
    }

    // draw lines
     const lines = g.selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", function(d) {
            return d.Coefficient >= 0
                ? "#71d4f8"
                : "#f87171";
        })
        .attr("stroke-width", 1.5)
        .attr("opacity", 0.4);

    dimensions.forEach(dim => {

        g.append("g")
            .attr("transform",
                `translate(${x(dim)},0)`)
            .call(d3.axisLeft(y[dim]))
            .style("color", "#f1e3dd")
            .style("stroke", "#f1e3dd");

        g.append("text")
            .attr("x", x(dim))
            .attr("y", -10)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text(dim)
            .style("fill", "#f1e3dd");
    });

    page7Plot.append("text")
        .attr("x", margin.left + innerWidth / 2)
        .attr("y", 18)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("Lung Cancer Predictor Importance")
        .style("fill", "#f1e3dd");

    // legend
    const legend = page7Plot.append("g")
        .attr("transform", `translate(${plotWidth - 70}, 70)`);

    legend.append("rect")
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", "#71d4f8");

    legend.append("text")
        .attr("x", 18)
        .attr("y", 10)
        .style("font-size", "11px")
        .text("Positive Effect")
        .style("fill", "#f1e3dd");

    legend.append("rect")
        .attr("y", 20)
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", "#f87171");

    legend.append("text")
        .attr("x", 18)
        .attr("y", 30)
        .style("font-size", "11px")
        .text("Negative Effect")
        .style("fill", "#f1e3dd");

    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("pointer-events", "none")
        .style("background", "#1f262c")
        .style("padding", "8px")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("color", "#f1e3dd");

    // hover interactions
    lines
        .on("mouseover", function(d) {
            lines.attr("opacity", 0.08);

            d3.select(this)
                .attr("opacity", 1)
                .attr("stroke-width", 3);

            tooltip
                .style("visibility", "visible")
                .html(
                    "<strong>" + (d.Feature || "Unknown Predictor") + "</strong><br>" +
                    "Coefficient: " + d.Coefficient.toFixed(3) + "<br>" +
                    "Odds Ratio: " + d["Odds Ratio"].toFixed(3) + "<br>" +
                    "Importance: " + d.AbsCoefficient.toFixed(3)
                );
        })
        .on("mousemove", function() {
            const event = d3.event;
            tooltip
                .style("top", (event.pageY - 20) + "px")
                .style("left", (event.pageX + 15) + "px");
        })
        .on("mouseout", function() {
            lines
                .attr("opacity", 0.4)
                .attr("stroke-width", 1.5);

            tooltip.style("visibility", "hidden");
        });

}).catch(error => {
    console.error("Error loading data:", error);
});
    
    page7.append("text")
        .attr("class", "page7")
        .attr("x", 50)
        .attr("y", height - 110)
        .text("Parallel Coordinates 2:")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    page7.append("text")
        .attr("class", "page7")
        .attr("x", 50)
        .attr("y", height - 80)
        .text("This graph shows feature importance from our logistic regression model. (Refer to page 4 for detail on axis labels.)")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
        .style("pointer-events", "none")
        .style("fill", "#f1e3dd")
        .style("opacity", 0);

    //CONTENT FOR PAGE 7 END

    d3.selectAll(".page7").style("opacity", 0)
      .style("pointer-events", "none");

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
        .attr("stroke-width", "1px")
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
        .attr("stroke-width", "1px")
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
                .style("opacity", 1)
                .style("pointer-events", "auto");

            d3.selectAll(".page7-plot")
                .transition()
                .duration(2000)
                .style("opacity", targetPage === 7 ? 1 : 0)
                .style("pointer-events", targetPage === 7 ? "auto" : "none");

                        if (targetPage === 5) {
            if (scG) {
                    if (scMode === "brush") {
                        scG.select(".sc-brush")
                            .style("pointer-events", "all")
                            .style("display", null);
                    } else if (scMode === "zoom") {
                        scG.select(".sc-zoom-rect")
                            .style("display", null);
                    }
                }
            } 
            else {
                if (scG) {
                    scG.select(".sc-brush")
                        .style("pointer-events", "none")
                        .style("display", "none");
                    scG.select(".sc-zoom-rect")
                        .style("display", "none");
                }
            }

            // Hides the back button if the target page is 1, otherwise shows it.
            d3.selectAll(".backButton").transition()
                .duration(750)
                .style("opacity", targetPage === 1 ? 0 : 1)
                .style("pointer-events", targetPage === 1 ? "none" : "auto");
            d3.selectAll(".backButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 1 ? 0 : 1);

            // Hides the forward button if the target page is 7, otherwise shows it.
            d3.selectAll(".forwardButton").transition()
                .duration(750)
                .style("opacity", targetPage === 7 ? 0 : 1)
                .style("pointer-events", targetPage === 7 ? "none" : "auto");
            d3.selectAll(".forwardButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 7 ? 0 : 1);

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
        .attr("fill", "#ccd6e7");
    })
    .on("mouseout", function() {
        d3.select(this)
            .attr("fill", "#b5c1d5");
    })
