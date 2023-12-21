import * as React from "react";
import { useFabric } from "./FabricProvider";

interface Props {
  fill: string;
  x: number;
  y: number;
  id: string;
  selected: boolean;
  handleClick: () => void;
}

export default function Stitch({
  fill,
  x,
  y,
  id,
  selected,
  handleClick,
}: Props) {
  const [currentFill, setCurrentFill] = React.useState(fill);
  const { cellSize, selectFill } = useFabric();

  React.useEffect(() => {
    if (selected) {
      setCurrentFill(selectFill);
    } else {
      setCurrentFill(fill);
    }
  }, [fill, selected, selectFill]);

  return (
    <rect
      className="stitch"
      width={cellSize}
      height={cellSize}
      fill={currentFill}
      x={x * cellSize + 0.5}
      y={y * cellSize + 0.5}
      onClick={handleClick}
      data-id={id}
    />
  );
}
