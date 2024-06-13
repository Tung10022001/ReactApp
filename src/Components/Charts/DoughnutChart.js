import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Chart } from "chart.js";
Chart.register(ChartDataLabels);

const DoughnutChart = ({ data }) => {
  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Course Registrations",
        data: Object.values(data).map((value) => (value / total) * 100),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: (value) => value.toFixed(1) + "%",
        color: "#000",
        anchor: "end",
        align: "start",
        offset: 40,
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  return (
    <div className="w-full h-96">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
