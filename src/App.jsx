import React, { useEffect, useState } from "react";
import "./styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import { graphsToDisplay } from "./components/Container";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function ShowcaseLayout() {
  const [currentBreakpoint, handleCurrentBreakpoint] = useState("lg");
  const [compactType, handleCompactType] = useState("vertical");
  const [mounted, handleMounted] = useState(false);
  const [layouts, handleLayout] = useState({ lg: generateLayout() });

  useEffect(() => {
    handleMounted(true);
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(layouts), "from useEffect");
  }, [layouts]);

  function generateDOM() {
    return _.map(layouts.lg, (l, i) => {
      const Component = graphsToDisplay[i];
      return Component ? (
        <div key={i} className={l.static ? "static" : ""}>
          <Component />
        </div>
      ) : (
        <></>
      );
    });
  }

  function onBreakpointChange(breakpoint) {
    handleCurrentBreakpoint(breakpoint);
  }

  return (
    <div>
      <ResponsiveReactGridLayout
        layouts={layouts}
        onBreakpointChange={onBreakpointChange}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </div>
  );
}

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};

function generateLayout() {
  return [
    { x: 8, y: 0, w: 2, h: 2, i: "0" },
    { x: 2, y: 0, w: 2, h: 2, i: "1" },
    { x: 0, y: 0, w: 2, h: 3, i: "2" },
    { x: 8, y: 0, w: 2, h: 5, i: "3" },
    { x: 4, y: 0, w: 2, h: 4, i: "4" },
    { x: 0, y: 0, w: 2, h: 3, i: "5" },
    { x: 10, y: 3, w: 2, h: 3, i: "6" },
    { x: 8, y: 4, w: 2, h: 4, i: "7" },
    { x: 2, y: 5, w: 2, h: 5, i: "8" },
    { x: 8, y: 2, w: 2, h: 2, i: "9" }
  ];
}
