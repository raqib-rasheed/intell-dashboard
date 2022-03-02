import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import getChartTitle from "../../utils/constats";

export default function SearchPopularity() {
  const [data, updateData] = useState([1, 2, 2, 2, 2, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
      let array = [...data, val];
      array.shift();
      updateData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [data]);
  return <ChartViewer data={data} title="Product Trends by Month" />;
}

function ChartViewer(props) {
  const series = [
    {
      name: "xx",
      data: props.data
    }
  ];
  const options = {
    title: getChartTitle("Google search popularity over time"),
    chart: {
      type: "line",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    labels: [
      "01 Jan 21",
      "02 Jan 21",
      "03 Jan 21",
      "04 Jan 21",
      "05 Jan 21",
      "06 Jan 21",
      "07 Jan 21",
      "08 Jan 21",
      "09 Jan 21",
      "10 Jan 21",
      "11 Jan 21",
      "12 Jan 21"
    ],
    xaxis: {
      type: "datetime"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      curve: "smooth"
    },
    colors: ["#2d9dc6"]
  };
  return (
    <Chart
      height="100%"
      width="100%"
      options={options}
      series={series}
      type="line"
    />
  );
}
