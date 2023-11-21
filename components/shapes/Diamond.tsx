"use client";

import * as React from "react";
import G from "../G";
import ShapeBase from "./ShapeBase";

interface Props {
  diameter: number;
  stroke: string;
  cx: number;
  cy: number;
  fill?: string;
  filled?: boolean;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function Diamond({
  diameter,
  stroke,
  fill = "black",
  filled = false,
  cx,
  cy,
  selected,
  setSelected,
}: Props) {
  const realDiameter = diameter % 2 === 0 ? diameter - 1 : diameter;

  const stitches = React.useMemo(() => {
    // calculate again locally to avoid depending on it in depedency array
    const realDiameter = diameter % 2 === 0 ? diameter - 1 : diameter;
    const mid = (realDiameter - 1) / 2;
    const s = [];
    for (let x = 0; x < realDiameter; x++) {
      for (let y = 0; y < realDiameter; y++) {
        if (
          x === mid - y ||
          x === mid + y ||
          x === realDiameter - y + mid - 1 ||
          x === y + mid + 1 - realDiameter
        ) {
          s.push({ fill: stroke, x, y });
        }
      }
    }
    if (filled) {
      for (let x = 0; x < realDiameter; x++) {
        for (let y = 0; y < realDiameter; y++) {
          if (
            x >= mid - y &&
            x <= mid + y &&
            x >= y + mid + 1 - realDiameter &&
            x <= realDiameter - y + mid - 1
          ) {
            s.push({ fill, x, y });
          }
        }
      }
    }
    return s;
  }, [diameter, stroke, fill, filled]);

  return (
    <G x={cx} y={cy}>
      {stitches && (
        <ShapeBase
          stitches={stitches}
          x={-(realDiameter - 1) / 2}
          y={-(realDiameter - 1) / 2}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </G>
  );
}
