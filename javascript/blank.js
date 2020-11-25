/* chart.js chart examples */

// chart colors
var blue = ['#ffffff','#79bef7','#0676d7','#ffffff','#fe7996','#ad2e4d'];
var red = ['#ffffff','#fe7996','#ad2e4d','#ffffff','#fe7996','#ad2e4d'];
var green = ['#ffffff','#27d2b8','#1f4c59','#ffffff','#fe7996','#ad2e4d'];

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
