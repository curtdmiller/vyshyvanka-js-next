import * as React from "react";
import Fabric from "../Fabric";
import Star from "../shapes/Star";
import { Box } from "@chakra-ui/react";

export default function StarTest() {
  const [selectFirst, setSelectFirst] = React.useState(false);
  const [selectSecond, setSelectSecond] = React.useState(false);

  return (
    <Box backgroundColor="#222">
      <Fabric gridSize={[37, 51]} showGrid>
        <Star
          center={[2, 5]}
          color="white"
          width={1}
          selected={selectFirst}
          setSelected={setSelectFirst}
        />
        <Star
          center={[6, 5]}
          color="white"
          width={3}
          selected={selectSecond}
          setSelected={setSelectSecond}
        />
        <Star center={[12, 5]} color="white" width={5} />
        <Star center={[20, 5]} color="white" width={7} />
        <Star center={[30, 5]} color="white" width={9} />
        <Star center={[7, 20]} color="white" width={11} />
        <Star center={[28, 20]} color="white" width={13} />
        <Star center={[9, 37]} color="white" width={15} />
        <Star center={[27, 37]} color="white" width={17} />
      </Fabric>
    </Box>
  );
}
