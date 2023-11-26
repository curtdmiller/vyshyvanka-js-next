"use client";

import * as React from "react";
import Fabric from "@/components/Fabric";
import Diamond from "@/components/shapes/Diamond";
import { colors } from "@/theme/colors";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import InnerTriangles from "./_components/InnerTriangles";
import AudioStart from "@/components/AudioStart";
import { StarContextProvider } from "./_components/StarContext";
import CenterStar from "./_components/CenterStar";
import CornerStars from "./_components/CornerStars";
import InnerSquare from "./_components/InnerSquare";
import OuterDiamonds from "./_components/OuterDiamonds";
import OuterTriangles from "./_components/OuterTriangles";
import Menu from "./_components/Menu";
import InfoDialog from "./_components/InfoDialog";

export default function StarDiamond() {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [color, setColor] = React.useState<string>(colors.blue);

  function handleExport() {
    if (svgRef.current) {
      const data = new XMLSerializer().serializeToString(svgRef.current);
      const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svg);
      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "download");
      a.setAttribute("download", "vyshyvanka-star.svg");
      a.click();
    }
  }

  return (
    <>
      <AudioStart />
      <Grid
        templateColumns={["", null, "1fr 3fr", "1fr 3fr 1fr"]}
        width="100%"
        padding="3"
      >
        <GridItem>
          <Menu
            handleExport={handleExport}
            color={color}
            onColorChange={setColor}
          />
        </GridItem>
        <GridItem>
          <Box>
            <Flex justifyContent="space-between">
              <Text>Tempo -</Text>
              <Text>Tempo +</Text>
            </Flex>
            <StarContextProvider>
              <Fabric gridSize={[37, 37]} selectedFill={color} ref={svgRef}>
                <OuterTriangles />
                <OuterDiamonds />
                <InnerTriangles />
                <CenterStar />
                <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
                <CornerStars />
                <InnerSquare />
              </Fabric>
            </StarContextProvider>
            <Flex justifyContent="space-between">
              <Text>Volume -</Text>
              <Text>Volume +</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
