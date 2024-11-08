import React from "react";
import { useSelector } from "react-redux";

const MetricCard = () => {
  const metrics = useSelector((state) => state.metrics);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white border border-[#e1e4ec] rounded shadow-lg w-full p-4 flex flex-col justify-between gap-2"
        >
          <p className="text-sm text-right font-bold text-green-700">
            {metric.percentage}
          </p>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl">{metric.counts}</h1>
            <p>{metric.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCard;
