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
        .text("TEXT FOR PAGE 1")
        .style("font-size", "50px")
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

    //Page 5 - Interactive Dashboard. Big page with the interative scatterplot & parallel coordinate chart.
    //NOTE - if they don't fit nicely on the same page, we can make another 'slide' and split it.
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
            d3.selectAll(".backButton, .backButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 1 ? 0 : 100)
                .style("pointer-events", targetPage === 1 ? "none" : "auto");

            // Hides the forward button if the target page is 5, otherwise shows it.
            d3.selectAll(".forwardButton, .forwardButtonText").transition()
                .duration(750)
                .style("opacity", targetPage === 5 ? 0 : 100)
                .style("pointer-events", targetPage === 5 ? "none" : "auto");

            currentPage = targetPage;
        }

        backButton.on("click", function() {
            if (currentPage > 1) {
                transitionToPage(currentPage - 1);
            }
        });
        forwardButton.on("click", function() {
            if (currentPage < 5) {
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
