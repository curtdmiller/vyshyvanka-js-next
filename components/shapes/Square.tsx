import React from "react";
import ShapeBase from "./ShapeBase";

interface Props {
  width: number;
  stroke: string;
  x: number;
  y: number;
  fill?: string;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function Square({
  width,
  x,
  y,
  stroke,
  fill,
  selected,
  setSelected,
}: Props) {
  const stitches = React.useMemo(() => {
    const tmp = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < width; y++) {
        if (x == 0 || x == width - 1 || y == 0 || y == width - 1) {
          tmp.push({ fill: stroke, x, y });
        } else {
          fill && tmp.push({ fill, x, y });
        }
      }
    }
    return tmp;
  }, [width, stroke, fill]);

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
