import React from "react";
import Fabric from "../Fabric";
import G from "../G";
import ShapeBase from "../shapes/ShapeBase";
import Line from "../shapes/Line";
import { colors } from "../../theme/colors";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function WindingDance() {
  function renderPattern() {
    const elements = [];
    for (let i = 0; i < 5; i++) {
      if (i == 4) {
        elements.push(
          <G x={i * 12}>
            <WShape x={1} y={2} />
          </G>
        );
      } else {
        elements.push(
          <G x={i * 12}>
            <WShape x={1} y={2} />
            <ZShape x={6} y={1} direction="reverse" />
            <VShape x={8} y={1} />
            <ZShape x={12} y={1} />
          </G>
        );
      }
    }
    return elements;
  }
  return (
    <>
      <Box backgroundColor={colors.offWhite}>
        <Fabric gridSize={[57, 7]}>
          <Line length={57} angle="horizontal" color={colors.red} x={0} y={0} />
          <Line length={57} angle="horizontal" color={colors.red} x={0} y={1} />
          <Line length={57} angle="horizontal" color={colors.red} x={0} y={2} />
          {renderPattern()}
        </Fabric>
      </Box>
      <Box mt="4">
        <Image
          src="/about/windingdances.jpg"
          alt=""
          width="1370"
          height="100"
        />
      </Box>
    </>
  );
}

function WShape({ x, y }: { x: number; y: number }) {
  const stitches = React.useMemo(() => {
    return [
      { fill: colors.darkBlue, x: 0, y: 1 },
      { fill: colors.darkBlue, x: 1, y: 2 },
      { fill: colors.lightGreen, x: 1, y: 1 },
      { fill: colors.darkBlue, x: 2, y: 1 },
      { fill: colors.lightGreen, x: 2, y: 0 },
      { fill: colors.darkBlue, x: 3, y: 0 },
      { fill: colors.darkBlue, x: 4, y: 1 },
      { fill: colors.lightGreen, x: 4, y: 0 },
      { fill: colors.darkBlue, x: 5, y: 2 },
      { fill: colors.lightGreen, x: 5, y: 1 },
      { fill: colors.darkBlue, x: 6, y: 1 },
    ];
  }, []);

  return (
    <G x={x} y={y}>
      <ShapeBase stitches={stitches} x={0} y={0} />;
    </G>
  );
}

function VShape({ x, y }: { x: number; y: number }) {
  const stitches = React.useMemo(() => {
    const s = [];
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 4; y++) {
        if (x == y || x == 4 - y) {
          s.push({ fill: colors.darkBlue, x, y });
        }
      }
    }
    return s;
  }, []);

  return (
    <G x={x} y={y}>
      <ShapeBase stitches={stitches} x={0} y={0} />;
    </G>
  );
}

interface ZProps {
  x: number;
  y: number;
  direction?: "forward" | "reverse";
}

function ZShape({ x, y, direction = "forward" }: ZProps) {
  const stitches = React.useMemo(() => {
    const s = [];
    if (direction === "reverse") {
      s.push(
        { fill: colors.lightOrange, x: 0, y: 0 },
        { fill: colors.lightOrange, x: 1, y: 0 },
        { fill: colors.lightOrange, x: 1, y: 1 },
        { fill: colors.lightOrange, x: 2, y: 1 }
      );
    } else {
      s.push(
        { fill: colors.lightOrange, x: 1, y: 0 },
        { fill: colors.lightOrange, x: 2, y: 0 },
        { fill: colors.lightOrange, x: 0, y: 1 },
        { fill: colors.lightOrange, x: 1, y: 1 }
      );
    }
    return s;
  }, [direction]);

  return (
    <G x={x} y={y}>
      <ShapeBase stitches={stitches} x={0} y={0} />
    </G>
  );
}
