d3.csv("../lrModelLungCancer.csv").then(data => {
document.body.style.background = "#2F353B";
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

    const svg = d3.select("svg");

    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr("width", width)
       .attr("height", height);

    const margin = {
        top: 80,
        right: 120,
        bottom: 50,
        left: 60
    };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
        .attr("transform",
            `translate(${margin.left}, ${margin.top})`);

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

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .text("Lung Cancer Predictor Importance")
        .style("fill", "#f1e3dd");

    // legend
    const legend = svg.append("g")
        .attr("transform", `translate(${width - 115}, 120)`);

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

            lines 
                .attr("opacity", 0.08);

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

        .on("mousemove", function(d) {
            tooltip
                .style("top", (d3.event.pageY - 20) + "px")
                .style("left", (d3.event.pageX + 15) + "px");
        })

        .on("mouseout", function() {

           lines
            .attr("opacity", 0.4)
            .attr("stroke-width", 1.5);

            tooltip
                .style("visibility", "hidden");
        });
    
}).catch(error => {
    console.error("Error loading data:", error);
});