import _ from "lodash";

export default function Insights() {
  return (
    <>
      <div className="insightsHeading">Insights</div>
      {_.map(_.range(0, 20), (item, i) => (
        <div className="InsightsItem">Insght {i + 1}</div>
      ))}
    </>
  );
}
