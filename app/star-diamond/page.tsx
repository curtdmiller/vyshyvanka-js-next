import Fabric from "@/components/Fabric";
import Diamond from "@/components/shapes/Diamond";
import { colors } from "@/theme/colors";
import { Container } from "@chakra-ui/react";
import * as React from "react";
import InnerTriangles from "./_components/InnerTriangles";
import AudioStart from "@/components/AudioStart";
import { StarContextProvider } from "./_components/StarContext";
import CenterStar from "./_components/CenterStar";
import CornerStars from "./_components/CornerStars";
import InnerSquare from "./_components/InnerSquare";
import OuterDiamonds from "./_components/OuterDiamonds";
import OuterTriangles from "./_components/OuterTriangles";

export default function StarDiamond() {
  return (
    <>
      <AudioStart />
      <Container>
        <StarContextProvider>
          <Fabric gridSize={[37, 37]}>
            <OuterTriangles />
            <OuterDiamonds />
            <InnerTriangles />
            <CenterStar />
            <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
            <CornerStars />
            <InnerSquare />
          </Fabric>
        </StarContextProvider>
      </Container>
    </>
  );
}
