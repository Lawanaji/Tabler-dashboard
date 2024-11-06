import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const piechatdata = useSelector((state) => state.piechatdata);
  const data = {
    labels: piechatdata.labels,
    datasets: [
      {
        data: piechatdata.data,
        backgroundColor: [
          "rgba(200,217,241,255)",
          "rgba(215,227,244,255)",
          "rgba(70,127,207,255)",
          "rgba(28,51,83,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="border border-[#e1e4ec] shadow-lg rounded w-full">
      <h1 className="border-b border-[#e1e4ec] py-3 px-3">
        Title of the chart{" "}
      </h1>
      <Pie data={data} options={options} className="p-5" />
    </div>
  );
};

export default PieChart;
