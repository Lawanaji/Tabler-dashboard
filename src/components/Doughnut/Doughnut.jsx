import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const doughtnutdata = useSelector((state) => state.doughnutdata);
  const data = {
    datasets: [
      {
        data: doughtnutdata.data,
        backgroundColor: ["rgba(142,207,77,255)", "rgba(93,186,44,255)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="border border-[#e1e4ec] shadow-lg rounded w-full">
      <h1 className="border-b border-[#e1e4ec] py-3 px-3">
        Title of the chart{" "}
      </h1>
      <Doughnut data={data} className="p-5" />
    </div>
  );
};

export default DoughnutChart;
