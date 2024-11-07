// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useSelector } from "react-redux";
// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
//   Tooltip,
//   Legend
// );

// const AreaChart = () => {
//   const developmentactivities = useSelector(
//     (state) => state.developmentactivities
//   );

//   const data = {
//     labels: developmentactivities.labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: developmentactivities.values,
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgb(75,192,192)",
//         borderWidth: 2,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Area Chart Example",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default AreaChart;

import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const AreaChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    const chart = new ApexCharts(
      document.getElementById("area-chart"),
      options
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="area-chart" style={{ width: "100%", height: "100%" }} />;
};

export default AreaChart;
