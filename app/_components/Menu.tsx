"use client";

import { Box, Button, Flex, Kbd, Text, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { FaDownload, FaQuestion } from "react-icons/fa";
import { GithubPicker } from "react-color";
import { colorPickerOptions } from "@/theme/colors";
import InfoDialog from "./interface/InfoDialog";

interface Props {
  handleExport: () => void;
  color: string;
  onColorChange: (color: string) => void;
}

export default function Menu({ handleExport, color, onColorChange }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction={["row", null, "column"]}
      alignItems="flex-start"
      mb={[4, null]}
    >
      <Button
        onClick={onOpen}
        variant="outline"
        colorScheme="gray"
        size="sm"
        mb={["0", null, "2"]}
        mr={["2", null, "0"]}
        leftIcon={<FaQuestion />}
      >
        Instructions
      </Button>
      <InfoDialog isOpen={isOpen} onClose={onClose} />
      <Button
        variant="outline"
        colorScheme="gray"
        size="sm"
        onClick={handleExport}
        leftIcon={<FaDownload />}
        display={["none", null, "block"]}
      >
        Export SVG
      </Button>
      <Box mt="5" display={["none", null, "block"]}>
        <Text mb="2" fontWeight="semibold">
          Draw Color
        </Text>
        <GithubPicker
          color={color}
          onChange={(color) => {
            onColorChange(color.hex);
          }}
          colors={colorPickerOptions}
          triangle="hide"
          width="163px"
        />
        <Text mt="2">
          (<Kbd>shift</Kbd>+<Kbd>click</Kbd> to draw)
        </Text>
      </Box>
    </Flex>
  );
}
