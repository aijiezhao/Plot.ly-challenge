// Building gauge


function buildGauge(gaugeValue) {

    console.log(gaugeValue);
    var data = [{domain: {x: [0,1], y: [0, 1]},
                 value: 10, 
                 title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
                 type: "indicator", 
                 align: "center",
                 mode: "gauge+delta", 
                 delta: {reference: 9, increasing: {color: "gray"}}, 
                 gauge:                           
                 {axis: {range: [1, 10],
                 tickvals: [1,2,3,4,5,6,7,8,9,10],
                 ticktext: ["0","1","2","3","4","5","6","7","8","9"],
                 ticks: "inside",
                 showticklabels: true,
                 tickangle: 0}, 
                 bar: { thickness:0.2,color: "white" },
                 steps: [
                 {range: [0,1], color: "#F3DAF0"},
                 {range: [1,2], color: "#DEBAE8" } ,
                 {range: [2,3], color: '#D2A7E2' },
                 {range: [3,4], color: '#BF8ED9' },
                 {range: [4,5], color: '#AC74D1' },
                 {range: [5,6], color: '#995AC8' },
                 {range: [6,7], color: '#8B4DC4' },
                 {range: [7,8], color: '#7B41C0' },
                 {range: [8,9], color: '#633CB4' },
                 {range: [9,10], color: '#4B36A2' },
                ], 
                 threshold: {line: {color: "gray", width: 4},
                 thickness: 1, value: gaugeValue}}}];
             

      var layout = {width: 450, 
        height: 450, 
        margin: {t: 25, r: 25, l: 25, b: 25},
      paper_bgcolor: "white", font: {color: "gray", family: "Arial"}};
     var gauge = document.getElementById("gauge");

    Plotly.newPlot(gauge, data, layout);
  }