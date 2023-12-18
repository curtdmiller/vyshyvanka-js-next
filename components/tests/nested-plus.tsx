import * as React from "react";
import Fabric from "../Fabric";
import Plus from "../shapes/Plus";

export default function NestedPlus() {
  const [selectAll, setSelectAll] = React.useState(false);
  return (
    <Fabric cellSize={10} gridSize={[21, 21]}>
      <g>
        <Plus
          diameter={21}
          lineWidth={9}
          stroke="#ff0000"
          selected={selectAll}
          setSelected={setSelectAll}
          x={0}
          y={0}
        />
        <Plus
          diameter={21}
          lineWidth={5}
          stroke="#ffffff"
          selected={selectAll}
          setSelected={setSelectAll}
          x={0}
          y={0}
        />
        <Plus
          diameter={3}
          lineWidth={1}
          stroke="#ff0000"
          x={9}
          y={9}
          selected={selectAll}
          setSelected={setSelectAll}
        />
      </g>
    </Fabric>
  );
}
