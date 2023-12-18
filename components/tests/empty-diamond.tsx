import Fabric from "../Fabric";
import Diamond from "../shapes/Diamond";

export default function EmptyDiamond() {
  return (
    <Fabric showGrid gridSize={[20, 20]} gridColor="black">
      <Diamond diameter={11} fill="red" stroke="red" cx={10} cy={10} />
    </Fabric>
  );
}
