"use client";

import { TimelineContext } from "@/context/TimelineContext";
import { useContext } from "react";
import {
  Pie,
  PieChart,
  Sector,
  PieSectorDataItem,
  Tooltip,
  TooltipIndex,
  Legend,
  Cell,
} from "recharts";

// #endregion
const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function TimelineChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { timeline } = context;

  const getChartData = () => {
    const counts = {
      call: 0,
      text: 0,
      video: 0,
    };

    timeline.forEach((item) => {
      const key = item.label.toLowerCase() as keyof typeof counts;
      if (counts[key] !== undefined) {
        counts[key]++;
      }
    });

    return [
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ];
  };

  const data = getChartData();

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip content={() => null} defaultIndex={defaultIndex} />
    </PieChart>
  );
}
