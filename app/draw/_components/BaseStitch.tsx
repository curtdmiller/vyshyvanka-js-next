import * as React from "react";
import { useFabric } from "../../../components/FabricProvider";

export interface StitchProps {
  x: number;
  y: number;
  defaultFill?: string;
}

export default function BaseStitch({
  x,
  y,
  defaultFill = "transparent",
}: StitchProps) {
  const { cellSize, selectFill } = useFabric();
  const [fill, setFill] = React.useState(defaultFill);

  function handleClick() {
    if (fill === selectFill) {
      setFill(defaultFill);
    } else {
      setFill(selectFill);
    }
  }

  return (
    <rect
      className="stitch"
      fill={fill}
      width={cellSize}
      height={cellSize}
      x={x * cellSize + 0.5}
      y={y * cellSize + 0.5}
      onClick={handleClick}
    />
  );
}
