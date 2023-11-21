import React from "react";
import ShapeBase from "./ShapeBase";

type Orientation = "NE" | "SE" | "SW" | "NW";

function generateRightStitches(
  orientation: Orientation,
  sidelength: number,
  fill: string
) {
  const tmp = [];
  switch (orientation) {
    case "NE":
      for (let y = 0; y < sidelength; y++) {
        for (let x = 0; x < y + 1; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "SE":
      for (let y = 0; y < sidelength; y++) {
        for (let x = 0; x < sidelength - y; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "SW":
      for (let y = 0; y < sidelength; y++) {
        for (let x = y; x < sidelength; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    case "NW":
      for (let y = 0; y < sidelength; y++) {
        for (let x = sidelength - y - 1; x < sidelength; x++) {
          tmp.push({ fill, x, y });
        }
      }
      return tmp;
    default:
      return [];
  }
}

interface Props {
  orientation: Orientation;
  sideLength: number;
  fill: string;
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function RightTriangle({
  orientation,
  sideLength,
  fill,
  x,
  y,
  selected,
  setSelected,
}: Props) {
  const stitches = React.useMemo(
    () => generateRightStitches(orientation, sideLength, fill),
    [orientation, sideLength, fill]
  );

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
