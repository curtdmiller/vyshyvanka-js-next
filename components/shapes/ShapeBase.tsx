import * as React from "react";
import G from "../G";
import { useFabric } from "../FabricProvider";

interface Stitch {
  x: number;
  y: number;
  fill: string;
}

interface Props {
  stitches: Stitch[];
  x: number;
  y: number;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export default function ShapeBase({
  stitches,
  x,
  y,
  selected,
  setSelected,
}: Props) {
  const { cellSize, selectFill } = useFabric();
  const [stitchState, setStitchState] = React.useState(
    stitches.map((stitch) => ({
      ...stitch,
      selected: false,
      originalFill: stitch.fill,
    }))
  );

  React.useEffect(() => {
    setStitchState(
      stitches.map((stitch) => ({
        ...stitch,
        selected: false,
        originalFill: stitch.fill,
      }))
    );
  }, [stitches]);

  function shapeClickHandler(event: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  function stitchClickHandler(
    event: React.MouseEvent<SVGRectElement, MouseEvent>
  ) {
    if (event.shiftKey) {
      const newStitches = [...stitchState];
      const cur = newStitches[Number(event.currentTarget.dataset.id)];
      cur.selected = !cur.selected;
      cur.fill = cur.selected ? selectFill : cur.originalFill;
      setStitchState(newStitches);
    }
  }

  return (
    <G x={x} y={y} fillOpacity={selected ? 0.5 : 1} onClick={shapeClickHandler}>
      {stitchState.map((stitch, i) => (
        <rect
          width={cellSize}
          height={cellSize}
          fill={stitch.fill}
          x={stitch.x * cellSize + 0.5}
          y={stitch.y * cellSize + 0.5}
          onClick={stitchClickHandler}
          data-id={i}
          key={`stitch-${i}`}
        />
      ))}
    </G>
  );
}
