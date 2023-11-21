/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartDatas, options }) => {
  return <Bar data={chartDatas} options={options} />;
};

export default BarChart;
