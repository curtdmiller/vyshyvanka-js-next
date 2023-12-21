"use client";

import * as React from "react";
import Fabric from "@/components/Fabric";
import {
  Box,
  Button,
  Container,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import BaseStitch from "./_components/BaseStitch";
import { GithubPicker } from "react-color";
import { colorPickerOptions, colors } from "@/theme/colors";

export default function Draw() {
  const [size, setSize] = React.useState(20);
  const [inputValue, setInputValue] = React.useState(20);
  const [keyReset, setKeyReset] = React.useState(0);
  const fabricRef = React.useRef<SVGSVGElement>(null);
  const [color, setColor] = React.useState<string>(colors.blue);

  const grid = React.useMemo(() => {
    const temp = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        temp.push({ x, y });
      }
    }
    return temp;
  }, [size]);

  function exportSvg() {
    if (fabricRef.current) {
      const data = new XMLSerializer().serializeToString(fabricRef.current);
      const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svg);
      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "download");
      a.setAttribute("download", "vyshyvanka-freedraw.svg");
      a.click();
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSize(inputValue);
  }

  return (
    <Container>
      <Heading>Free Draw</Heading>
      <Box mt="4" mb="4">
        <Text>Size</Text>
        <Stack direction={["column", "row"]}>
          <form onSubmit={handleSubmit}>
            <Stack direction={["column", "row"]}>
              <NumberInput
                value={inputValue}
                onChange={(_asString, asNumber) => {
                  setInputValue(asNumber);
                }}
                min={1}
                max={51}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button type="submit">Resize</Button>
            </Stack>
          </form>
          <Button
            onClick={() => {
              setKeyReset((prev) => prev + 1);
            }}
          >
            Reset
          </Button>
          <Button onClick={exportSvg}>Export SVG</Button>
        </Stack>
      </Box>
      <Box p="4" pb="8" display="flex" justifyContent="center">
        <GithubPicker
          color={color}
          onChange={(color) => {
            setColor(color.hex);
          }}
          colors={colorPickerOptions}
          triangle="hide"
          width="unset"
        />
      </Box>
      <Fabric
        ref={fabricRef}
        gridSize={[size, size]}
        gridColor="#dedede"
        selectedFill={color}
        showGrid
      >
        {grid.map((coordinate) => (
          <BaseStitch
            {...coordinate}
            key={`${coordinate.x}-${coordinate.y}-${keyReset}`}
          />
        ))}
      </Fabric>
    </Container>
  );
}
