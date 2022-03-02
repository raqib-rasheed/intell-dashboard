import ReactApexChart from "react-apexcharts";
import getChartTitle from "../../utils/constats";

export default function SocialMediaFollowers() {
  const state = {
    series: [
      {
        name: "Facebook",
        data: [10, 4, 32, 21, 19, 3]
      },
      {
        name: "Twitter",
        data: [10, 21, 19, 3, 41, 35, 51, 49]
      },

      {
        name: "Instagram",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    options: {
      chart: {
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      markers: {
        size: 7,
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: ["circle", "square"],
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: getChartTitle("Product Trends by Month"),
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
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
