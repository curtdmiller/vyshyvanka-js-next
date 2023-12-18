import Fabric from "../Fabric";
import G from "../G";
import PlusStar from "../shapes/PlusStar";
import React from "react";

export default function PlusStars() {
  const cellSize = 24;
  return (
    <Fabric cellSize={24} gridSize={[21, 21]}>
      <G x={0} y={0}>
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={3} y={0} />
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={9} y={0} />
      </G>
      <G x={0} y={5}>
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={0} y={0} />
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={6} y={0} />
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          x={12}
          y={0}
        />
      </G>
      <G x={0} y={10}>
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={3} y={0} />
        <PlusStar colors={["gold", "#a91b0d", "gold", "#a91b0d"]} x={9} y={0} />
      </G>
    </Fabric>
  );
}
