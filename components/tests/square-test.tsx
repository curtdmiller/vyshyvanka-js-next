import * as React from "react";
import Fabric from "../Fabric";
import Square from "../shapes/Square";
import G from "../G";

export default function SquareTest() {
  const cellSize = 10;
  const [emptySelected, setEmptySelected] = React.useState(false);
  const [solidSelected, setSolidSelected] = React.useState(false);
  const [redSelected, setRedSelected] = React.useState(false);
  const [groupSelected, setGroupSelected] = React.useState(false);

  return (
    <Fabric cellSize={cellSize} gridSize={[20, 20]}>
      <Square
        width={5}
        stroke="black"
        selected={emptySelected}
        setSelected={setEmptySelected}
        x={0}
        y={0}
      />
      <Square
        width={5}
        stroke="black"
        fill="black"
        x={6}
        y={0}
        selected={solidSelected}
        setSelected={setSolidSelected}
      />
      <Square
        width={5}
        stroke="black"
        fill="red"
        x={12}
        y={0}
        selected={redSelected}
        setSelected={setRedSelected}
      />
      <G x={0} y={6}>
        <Square
          width={12}
          x={0}
          y={0}
          stroke="black"
          selected={groupSelected}
          setSelected={setGroupSelected}
        />
        <Square
          width={9}
          stroke="black"
          x={8}
          y={5}
          selected={groupSelected}
          setSelected={setGroupSelected}
        />
      </G>
    </Fabric>
  );
}
