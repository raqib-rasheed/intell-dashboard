import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartTitle from "../../utils/constats";

export default function SeaShipments() {
  const state = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ],
    options: {
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        type: "line"
      },
      stroke: {
        width: [0, 2],
        curve: "smooth"
      },

      title: getChartTitle("Number of Sea Shipments over time"),
      dataLabels: {
        enabled: false
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    }
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height="100%"
      width="100%"
    />
  );
}
