import React from "react";
import ShapeBase from "./ShapeBase";

interface Props {
  length: number;
  angle: "vertical" | "horizontal" | "diagonal-down" | "diagonal-up";
  color: string;
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function Line({
  length,
  angle,
  color,
  x,
  y,
  selected,
  setSelected,
}: Props) {
  const stitches = React.useMemo(() => {
    switch (angle) {
      case "vertical":
        return Array(length)
          .fill(undefined)
          .map((_, i) => ({ fill: color, x: 0, y: i }));
      case "horizontal":
        return Array(length)
          .fill(undefined)
          .map((_, i) => ({ fill: color, x: i, y: 0 }));
      case "diagonal-down":
        return Array(length)
          .fill(undefined)
          .map((_, i) => ({ fill: color, x: i, y: i }));
      case "diagonal-up":
        return Array(length)
          .fill(undefined)
          .map((_, i) => ({ fill: color, x: i, y: length - i - 1 }));
    }
  }, [length, angle, color]);

  return (
    <ShapeBase
      stitches={stitches}
      x={x}
      y={y}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
