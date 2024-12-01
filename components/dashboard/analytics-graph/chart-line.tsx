"use client";

import { Line, LineProps } from "recharts";

interface ChartLineProps extends Omit<LineProps, "stroke"> {
  dataKey: string;
  color: string;
}

export function ChartLine({ dataKey, color, ...props }: ChartLineProps) {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      stroke={`hsl(${color})`}
      strokeWidth={2}
      dot={false}
      activeDot={{ r: 4 }}
      {...props}
    />
  );
}