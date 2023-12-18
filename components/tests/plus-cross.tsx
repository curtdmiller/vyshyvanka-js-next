import Fabric from "../Fabric";
import Plus from "../shapes/Plus";

export default function PlusCross() {
  return (
    <Fabric cellSize={10} gridSize={[21, 21]}>
      <g>
        <Plus diameter={21} lineWidth={1} stroke="#ff0000" x={0} y={0} />
        <Plus diameter={3} lineWidth={1} stroke="#ff0000" x={9} y={1} />
        <Plus diameter={3} lineWidth={1} stroke="#ff0000" x={9} y={17} />
        <Plus diameter={3} lineWidth={1} stroke="#ff0000" x={1} y={9} />
        <Plus diameter={3} lineWidth={1} stroke="#ff0000" x={17} y={9} />
      </g>
    </Fabric>
  );
}
