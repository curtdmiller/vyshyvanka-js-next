import * as React from "react";
import ShapeBase from "./ShapeBase";

type Orientation = "north" | "south" | "east" | "west";

function generateIsoStitches(
  orientation: Orientation,
  baseWidth: number,
  fill: string
) {
  const altitude = Math.ceil(baseWidth / 2);
  const center = altitude - 1;
  const tmp = [];
  switch (orientation) {
    case "north":
      for (let y = 0, n = 1; y < altitude; y++, n += 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x: center - y + i, y });
        }
      }
      return tmp;
    case "south":
      for (let y = 0, n = baseWidth; y < altitude; y++, n -= 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x: y + i, y });
        }
      }
      return tmp;
    case "east":
      for (let x = 0, n = baseWidth; x < altitude; x++, n -= 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x, y: x + i });
        }
      }
      return tmp;
    case "west":
      for (let x = 0, n = 1; x < altitude; x++, n += 2) {
        for (let i = 0; i < n; i++) {
          tmp.push({ fill, x, y: center - x + i });
        }
      }
      return tmp;
    default:
      return [];
  }
}

interface Props {
  orientation: Orientation;
  size: number;
  fill: string;
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export function IsoTriangle({
  orientation,
  size,
  fill,
  x,
  y,
  selected,
  setSelected,
}: Props) {
  const baseWidth = size % 2 === 0 ? size - 1 : size;
  const stitches = React.useMemo(
    () => generateIsoStitches(orientation, baseWidth, fill),
    [orientation, baseWidth, fill]
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
