import { Box } from "@chakra-ui/react";
import Fabric from "../Fabric";
import { IsoTriangle } from "../shapes/IsoTriangle";

export default function IsoscelesTriangles() {
  return (
    <Box maxWidth={200} margin="0 auto">
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={6} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={6} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="east" size={13} fill="red" x={6} y={3} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="west" size={13} fill="red" x={6} y={3} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={6} />
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={6} />
        <IsoTriangle orientation="east" size={13} fill="red" x={6} y={3} />
        <IsoTriangle orientation="west" size={13} fill="red" x={6} y={3} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={12} />
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={0} />
        <IsoTriangle orientation="east" size={13} fill="red" x={0} y={3} />
        <IsoTriangle orientation="west" size={13} fill="red" x={12} y={3} />
      </Fabric>
    </Box>
  );
}
