/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartDatas, options }) => {
  return <Line data={chartDatas} options={options} />;
};

export default LineChart;
