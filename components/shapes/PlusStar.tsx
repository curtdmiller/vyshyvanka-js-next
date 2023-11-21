import * as React from "react";
import G from "../G";
import Plus from "./Plus";

interface Props {
  colors: [string, string, string, string];
  x: number;
  y: number;
}

/**
 * ### PlusStar
 * Compound shape of four plusses in a diamond
 */
export default function PlusStar({ colors, x, y }: Props) {
  const [selectAll, setSelectAll] = React.useState(false);

  return (
    <G x={x} y={y}>
      <Plus
        diameter={3}
        lineWidth={1}
        stroke={colors[0]}
        x={1}
        y={3}
        selected={selectAll}
        setSelected={setSelectAll}
      />
      <Plus
        diameter={3}
        lineWidth={1}
        stroke={colors[1]}
        x={3}
        y={1}
        selected={selectAll}
        setSelected={setSelectAll}
      />
      <Plus
        diameter={3}
        lineWidth={1}
        stroke={colors[2]}
        x={5}
        y={3}
        selected={selectAll}
        setSelected={setSelectAll}
      />
      <Plus
        diameter={3}
        lineWidth={1}
        stroke={colors[3]}
        x={3}
        y={5}
        selected={selectAll}
        setSelected={setSelectAll}
      />
    </G>
  );
}
