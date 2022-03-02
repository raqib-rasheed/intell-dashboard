import getChartTitle from "../../utils/constats";
import { data as series } from "./data";

export const schema = {
  options: {
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396"
            },
            text: "Support"
          }
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: "#FEB019",
          opacity: 0.1,
          label: {
            borderColor: "#333",
            style: {
              fontSize: "10px",
              color: "#333",
              background: "#FEB019"
            },
            text: "Y-axis range"
          }
        }
      ],
      xaxis: [
        {
          x: new Date("23 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0"
            },
            text: "Anno Test"
          }
        },
        {
          x: new Date("26 Nov 2017").getTime(),
          x2: new Date("28 Nov 2017").getTime(),
          borderColor: "#B3F7CA",
          opacity: 0.5,
          label: {
            borderColor: "#B3F7CA",
            style: {
              fontSize: "10px",
              color: "#fff",
              background: "#00E396"
            },
            offsetY: -10,
            text: "X-axis range"
          }
        }
      ]
    },

    chart: {
      height: 350,
      type: "line",
      id: "areachart-2",
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
    title: getChartTitle("Ticker mentions over time"),
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: "datetime"
    }
  },
  series: [
    {
      data: series.monthDataSeries1.prices
    },
    {
      data: series.monthDataSeries2.prices
    }
  ]
};
