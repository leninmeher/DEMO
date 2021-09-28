export const planetChartData = {
    type: "line",
    data: {
      labels: ["Mer", "Ven", "Ear", "Mar", "Jup", "Sat", "Ura"],
      datasets: [
        {
          label: "Random Data",
          data: [0, 23, 13, 2, 59, 62, 27, 14],
          backgroundColor: "rgb(222, 237, 241)",
          borderColor: "rgb(55, 174, 221)",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 15
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;