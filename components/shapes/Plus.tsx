import React from "react";
import ShapeBase from "./ShapeBase";

interface Props {
  diameter: number;
  lineWidth: number;
  stroke: string;
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function Plus({
  diameter,
  lineWidth,
  stroke,
  x,
  y,
  selected,
  setSelected,
}: Props) {
  const stitches = React.useMemo(() => {
    const tempStitches = [];
    for (let x = 0; x < diameter; x++) {
      for (let y = 0; y < diameter; y++) {
        if (
          (x >= Math.floor((diameter - lineWidth) / 2) &&
            x < Math.floor(diameter - (diameter - lineWidth) / 2)) ||
          (y >= Math.floor((diameter - lineWidth) / 2) &&
            y < Math.floor(diameter - (diameter - lineWidth) / 2))
        ) {
          tempStitches.push({ fill: stroke, x, y });
        }
      }
    }
    return tempStitches;
  }, [diameter, lineWidth, stroke]);

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
