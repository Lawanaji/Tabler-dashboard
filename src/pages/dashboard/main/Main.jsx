import React from "react";
import MetricCard from "../home/metriCards/MetricCard";
import AreaChart from "../../../components/AreaChart/AreaChart";
import Table from "../../../components/Table/Table";
import DoughnutChart from "../../../components/Doughnut/Doughnut";
import PieChart from "../../../components/pieChart/PieChart";

const Main = () => {
  return (
    <div className="py-5">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>

      <MetricCard />

      <div className="flex flex-col md:flex-row gap-5 items-start justify-start py-10">
        <div className="w-full md:w-1/2 shadow-lg border-[#e1e4ec] border-2">
          <h1 className="border-b border-[#e1e4ec] font-medium py-3 px-5">
            Development Activity
          </h1>
          <AreaChart />
          <Table />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="bg-[#DBE6F8] p-3 text-center">
            <strong>Read our documentation</strong> with code samples.
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <DoughnutChart />
            </div>
            <div className="w-full md:w-1/2">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
