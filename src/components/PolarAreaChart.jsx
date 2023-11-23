/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PolarAreaChart = ({ chartDatas }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // display: false,
        position: "bottom",
        align: "center",

        labels: {
          pointStyle: "rectRounded",
          usePointStyle: true,
          // This more specific font property overrides the global property
          font: {
            size: 11,
            family: "'PT Sans', serif",
          },
        },
      },
    },
  };
  return <Doughnut data={chartDatas} options={options} />;
};

export default PolarAreaChart;
