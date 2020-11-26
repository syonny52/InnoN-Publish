/* chart.js chart examples */

// chart colors
var blue = ['#ffffff','#79bef7','#0676d7','#ffffff','#fe7996','#ad2e4d'];
var red = ['#ffffff','#fe7996','#ad2e4d','#ffffff','#fe7996','#ad2e4d'];
var green = ['#ffffff','#27d2b8','#1f4c59','#ffffff','#fe7996','#ad2e4d'];
var plotOptions = {
  series: {
    stacking: 'normal'      
  }
};

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 85, 
  legend: {
      position:'bottom', 
      padding:5, 
      labels: {pointStyle:'circle', usePointStyle:true}
    }
};

// donut 1
var chDonutData1 = {
    labels: ['Bootstrap', 'Popper', 'Other'],
    datasets: [
      {
        backgroundColor: blue.slice(0,3),
        borderWidth: 0,
        data: [74, 11, 40]
      }
    ]
};
var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
      type: 'pie',
      data: chDonutData1,
      options: donutOptions
  });
}

// donut 2
var chDonutData2 = {
    labels: ['Wips', 'Pops', 'Dags'],
    datasets: [
      {
        backgroundColor: red.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
  new Chart(chDonut2, {
      type: 'pie',
      data: chDonutData2,
      options: donutOptions
  });
}

// donut 3
var chDonutData3 = {
    datasets: [
      {
        backgroundColor: green.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
  new Chart(chDonut3, {
      type: 'pie',
      data: chDonutData3,
      options: donutOptions
  });
}

// donut 4
var chDonutData4 = {
    datasets: [
      {
        backgroundColor: green.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut4 = document.getElementById("chDonut4");
if (chDonut4) {
  new Chart(chDonut4, {
      type: 'pie',
      data: chDonutData4,
      options: donutOptions
  });
}

// donut 5
var chDonuData5 = {
    datasets: [
      {
        backgroundColor: green.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut5 = document.getElementById("chDonut5");
if (chDonut5) {
  new Chart(chDonut5, {
      type: 'pie',
      data: chDonuData5,
      options: donutOptions
  });
}

// donut 6
var chDonutData6 = {
    datasets: [
      {
        backgroundColor: green.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut6 = document.getElementById("chDonut6");
if (chDonut6) {
  new Chart(chDonut6, {
      type: 'pie',
      data: chDonutData6,
      options: donutOptions
  });
}

// donut 7
var chDonutData7 = {
    datasets: [
      {
        backgroundColor: green.slice(0,3),
        borderWidth: 0,
        data: [40, 45, 30]
      }
    ]
};
var chDonut7 = document.getElementById("chDonut7");
if (chDonut7) {
  new Chart(chDonut7, {
      type: 'pie',
      data: chDonutData7,
      options: donutOptions
  });
}

// 막대그래프
if ($("#visit-sale-chart-dark").length) {
  Chart.defaults.global.legend.labels.usePointStyle = true;
  var ctx = document
      .getElementById('visit-sale-chart-dark')
      .getContext("2d");

  var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
  gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
  gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
  var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
  gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
  gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
  var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

  var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
  gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
  var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [
              'JAN',
              'FEB',
              'MAR',
              'APR',
              'MAY',
              'JUN',
              'JUL',
              'AUG'
          ],
          datasets: [
              {
                  label: "CHN",
                  borderColor: gradientStrokeViolet,
                  backgroundColor: gradientStrokeViolet,
                  hoverBackgroundColor: gradientStrokeViolet,
                  legendColor: gradientLegendViolet,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 2,
                  fill: 'origin',
                  data: [
                      20,
                      40,
                      15,
                      35,
                      25,
                      50,
                      30,
                      20
                  ]
              }, {
                  label: "USA",
                  borderColor: gradientStrokeRed,
                  backgroundColor: gradientStrokeRed,
                  hoverBackgroundColor: gradientStrokeRed,
                  legendColor: gradientLegendRed,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 2,
                  fill: 'origin',
                  data: [
                      40,
                      30,
                      20,
                      10,
                      50,
                      15,
                      35,
                      40
                  ]
              }, {
                  label: "UK",
                  borderColor: gradientStrokeBlue,
                  backgroundColor: gradientStrokeBlue,
                  hoverBackgroundColor: gradientStrokeBlue,
                  legendColor: gradientLegendBlue,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 2,
                  fill: 'origin',
                  data: [
                      70,
                      10,
                      30,
                      40,
                      25,
                      50,
                      15,
                      30
                  ]
              }
          ]
      },
      options: {
          responsive: true,
          legend: false,
          legendCallback: function (chart) {
              var text = [];
              text.push('<ul>');
              for (var i = 0; i < chart.data.datasets.length; i++) {
                  text.push(
                      '<li><span class="legend-dots" style="background:' + chart.data.datasets[i].legendColor +
                      '"></span>'
                  );
                  if (chart.data.datasets[i].label) {
                      text.push(chart.data.datasets[i].label);
                  }
                  text.push('</li>');
              }
              text.push('</ul>');
              return text.join('');
          },
          scales: {
              yAxes: [
                  {
                      ticks: {
                          display: false,
                          min: 0,
                          stepSize: 20,
                          max: 80
                      },
                      gridLines: {
                          drawBorder: false,
                          color: '#322f2f',
                          zeroLineColor: '#322f2f'
                      }
                  }
              ],
              xAxes: [
                  {
                      gridLines: {
                          display: false,
                          drawBorder: false,
                          color: 'rgba(0,0,0,1)',
                          zeroLineColor: 'rgba(235,237,242,1)'
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "#9c9fa6",
                          autoSkip: true
                      },
                      categoryPercentage: 0.5,
                      barPercentage: 0.5
                  }
              ]
          }
      },
      elements: {
          point: {
              radius: 0
          }
      }
  })
  $("#visit-sale-chart-legend-dark").html(myChart.generateLegend());
}

