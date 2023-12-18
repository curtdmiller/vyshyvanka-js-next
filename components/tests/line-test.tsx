import Line from "../shapes/Line";
import Fabric from "../Fabric";

export default function LineTest() {
  const cellSize = 10;
  return (
    <Fabric cellSize={10} gridSize={[20, 20]} showGrid gridColor="#eeeeee">
      <Line length={16} angle="horizontal" color="black" x={2} y={0} />
      <Line length={16} angle="vertical" color="black" x={0} y={2} />
      <Line length={16} angle="horizontal" color="black" x={2} y={19} />
      <Line length={16} angle="vertical" color="black" x={19} y={2} />
      <Line length={10} angle="diagonal-down" color="black" x={5} y={5} />
      <Line length={10} angle="diagonal-up" color="black" x={5} y={5} />
    </Fabric>
  );
}
