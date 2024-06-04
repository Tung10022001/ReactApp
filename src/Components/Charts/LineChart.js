import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Demo Data",
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
