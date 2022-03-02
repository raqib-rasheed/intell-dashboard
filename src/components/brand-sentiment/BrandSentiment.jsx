import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartTitle from "../../utils/constats";

export default function BrandSentiment() {
  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  const state = {
    series: [
      {
        name: "Central",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 80
          }
        )
      },

      {
        name: "North",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 190
          }
        )
      },
      {
        name: "South",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 90
          }
        )
      }
    ],
    options: {
      title: getChartTitle("Your brand sentiment over time"),
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        }
      },
      colors: ["#ffcc34", "#ff6626", "#d30496"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#d61f15", "#6d0d63", "#120165"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
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
