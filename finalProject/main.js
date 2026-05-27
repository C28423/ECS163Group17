d3.csv("lung_cancer.csv").then(data1 =>{
    console.log("data1", data1);
}).catch(function(error){
    console.log(error);
});

d3.csv("lrModelLungCancer.csv").then(data2 =>{
    console.log("data2", data2);
}).catch(function(error){
    console.log(error);
});

