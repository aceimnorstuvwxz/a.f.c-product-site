document.addEventListener('DOMContentLoaded', function() {
    console.log("hello")

    //dom加载完毕后就执行
})

window.addEventListener("load", function(event) {
    //所有资源加载完毕后执行
    init_chart_1()
    init_chart_2()
    init_chart_3()
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


function get_minute_hm_text(minute){
    var today_h = Math.floor(minute/60)
    var today_m = minute - today_h*60
    return today_h > 0 ? "" + today_h + "h" + today_m + "m" : "" + today_m + "m"
}

function init_chart_2() {
    console.log('init chart 2')

    var ctx = document.getElementById("my_chart_2").getContext('2d');


    var labels = ['微信', 'SourceTree', 'Adobe Photoshop', 'Sketch', 'Sublime Text', 'Safari', 'Terminal']
    var datas = [230, 166,  210, 58, 99, 47, 20]
    var colors = ['#85C0F4', '#85D0F4','#85C0E4','#95C0F4','#75C0F4','#85B0F4','#85C0C4']



    var config = {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data:datas,
                backgroundColor:colors
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var indice = tooltipItem.index
                        var min = data.datasets[0].data[indice]
                        return  data.labels[indice] +': ' + get_minute_hm_text(min)
                    }
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            // rotation: Math.random()*10
        }
    };

    window.chart_2 = new Chart(ctx, config);
}


function init_chart_3() {
    console.log('init chart 2')

    var ctx = document.getElementById("my_chart_3").getContext('2d');


    var labels = []
    var datas = []

    var current_offset = 21
    var last = 20
    for(; current_offset != 0; current_offset--) {

        var date =new Date()
        date.setDate(date.getDate() - current_offset)
        labels.push (date.toISOString().slice(5, 10))

        if (current_offset > 7) {
            var val = (30 - current_offset) * (30 - current_offset)*0.1 + Math.random()* 20
            // datas.push(Math.floor(val))
            datas.push(0)
        }

    }

    var i = 1
    for(; i != 8; i++){
        datas.push(Math.floor(100 * i * Math.random()))
    }

    // datas = datas.concat([100,300,200,100,266,600])
    var max = 800;


    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Cost",
                backgroundColor: "#81BEF7",
                borderColor: "#0B2161",
                borderWidth: 0.5,
                data: datas,
                fill: false,

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
                        var floatv = parseFloat(tooltipItem.yLabel)
                        return "Use:" + get_minute_hm_text(floatv)
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "#FFF",
                    },
                    ticks:{autoSkipPadding: 2},
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {beginAtZero:true, max:max},
                    display: false,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value',
                        max: max
                    }
                }]
            }
        }
    }

    window.chart_3 = new Chart(ctx, config);
}