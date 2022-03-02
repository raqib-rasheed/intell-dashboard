import React from "react";
import getChartTitle from "../../utils/constats";
const { default: ReactApexChart } = require("react-apexcharts");

export default function JobPosts() {
  const state = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    options: {
      title: getChartTitle("Your job posts over time"),
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height="100%"
      width="100%"
    />
  );
}
