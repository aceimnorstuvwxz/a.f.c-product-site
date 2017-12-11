document.addEventListener('DOMContentLoaded', function() {
    console.log("hello")

    //dom加载完毕后就执行
})

window.addEventListener("load", function(event) {
    //所有资源加载完毕后执行
    init_chart_1()
});


function init_chart_1() {
    console.log('init chart 1')

    var ctx = document.getElementById("my_chart_1").getContext('2d');

    var labels = spectrum_data.labels
    var datas = spectrum_data.datas

    labels = labels.map( function (t) { return new Date(t) })

    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Energy",
                backgroundColor: "#81BEF7",
                borderColor: "#0B2161",
                borderWidth: 0.5,
                data: datas,
                fill: true,

                pointRadius: 0.5,
                pointHoverRadius: 0.5,

            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            },
            title:{
                display:false,
                text:'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "Energy:" + tooltipItem.yLabel
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    type:'time',
                    time: {
                        tooltipFormat: "H:mm",
                        minUnit:'minute',
                        displayFormats: {
                            minute : 'H:mm',
                            hour: 'H:mm'
                        }
                    },
                    gridLines: {
                        color: "#FFF",
                    },
                    ticks:{
                        autoSkipPadding: 15
                    },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{

                    ticks: {
                        beginAtZero:true,
                        max:100
                    },
                    display: false,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }
                }]
            }
        }
    }
    window.chart_1 = new Chart(ctx, config);
}