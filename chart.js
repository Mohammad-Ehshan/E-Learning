// line chart 

var ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
     "Quar1",
     "Quar2",
     "Quar3",
     "Quar4"
    ],
    datasets: [
      {
        data: [72, 75, 76, 89],
        label: "Percentage",
        backgroundColor: "white",
        borderColor: "rgb(30, 118, 218)",
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive:false,
    animation: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.6,
        to: 0.1,
        loop: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  //   plugins: {
  //     tooltips: {
  //       enabled: true,
  //       backgroundColor: "Red",
  //       titleFontSize: 30,
  //     },
  //     title: {
  //       display: true,
  //       text: "Your Progress",
  //     },
  //   },
  // plugins:[plugin],
  },
});


// doughnut 

var round = document.getElementById("round-bar1").getContext("2d");

new Chart(round, {
  type: "doughnut",
  data: {
    // labels: [
    //   "Done",
    //   "Remain",
    // ],
    datasets: [
      {
        data: [92,8],
        label: "Overall",
        backgroundColor: [" rgb(30, 118, 218)","white"],
        borderColor: "black",
      },
    ],
  },
  options:{
    responsive:false
  }
});


var round = document.getElementById("round-bar2").getContext("2d");

new Chart(round, {
  type: "doughnut",
  data: {
    // labels: [
    //   "Done",
    //   "Remain",
    // ],
    datasets: [
      {
        data: [65,35],
        label: "Web",
        backgroundColor: ["rgb(30, 118, 218)","white"],
        borderColor: "black",
      },
    ],
  },
  options:{
    responsive:false
  }
});

var round = document.getElementById("round-bar3").getContext("2d");

new Chart(round, {
  type: "doughnut",
  data: {
    // labels: [
    //   "Done",
    //   "Remain",
    // ],
    datasets: [
      {
        data: [20,80],
        label: "DSA",
        backgroundColor: ["rgb(30, 118, 218)","white"],
        borderColor: "black",
      },
    ],
  },
  options:{
    responsive:false
  }
});

// bar chart 

var bar = document.getElementById("bar-chart").getContext("2d");

new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        data: [5.1,4.2,5.4,3.9,4.2,2.4,1.8],
        label: "Practice Time",
        backgroundColor: "rgb(30, 118, 218)",
        borderColor: "white",
      },
    ],
  },
  options:{
    legend:{
        fontColor:'red'
    },
  }
});