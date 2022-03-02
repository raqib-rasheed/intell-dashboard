import React from "react";
import Chart from "react-apexcharts";
import { schema } from "./schema";

export default function TickerMentions() {
  const [state] = React.useState(schema);
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="line"
      height="100%"
      width="100%"
    />
  );
}
