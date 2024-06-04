import React from "react";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DoughnutChart from "./Charts/DoughnutChart";
import SheetsForm from "./SheetForm";

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white w-[400px]">
          <BarChart></BarChart>
        </div>
        <div className="bg-white w-[400px]">
          <LineChart></LineChart>
        </div>
        <div className="bg-white w-[400px]">
          <DoughnutChart></DoughnutChart>
        </div>
      </div>
    </div>
  );
}
