import * as React from "react";
import G from "../G";
import Stitch from "../Stitch";

interface Props {
  fill: string;
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

/**
 * A single square stitch
 */
export default function Single({ fill, x, y, selected, setSelected }: Props) {
  const id = React.useId();
  const [stitchSelected, setStitchSelected] = React.useState(false);

  function clickHandler(event: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  return (
    <G fillOpacity={selected ? 0.5 : 1} onClick={clickHandler}>
      <Stitch
        fill={fill}
        x={x}
        y={y}
        selected={stitchSelected}
        handleClick={() => setStitchSelected(!stitchSelected)}
        id={id}
      />
    </G>
  );
}
