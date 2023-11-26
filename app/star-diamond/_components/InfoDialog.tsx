import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoDialog({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How to Use the Interface</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            The shapes that make up this embroidery pattern can be used as an
            interface to control sounds generated in the browser and drawn on to
            elaborate on the pattern. To change the colors of cells, shift-click
            on a cell and it will change to the color selected in the color
            picker. To interact with the interface, select shapes within the
            image by clicking on a square within the shape. See below for
            details.
          </Text>
          <Box borderTop="1px solid #ddd" p="3" mt="3">
            <Flex justifyContent="center">
              <Box maxWidth="150px">
                <Image src="/star.png" alt="" width={860} height={874} />
              </Box>
            </Flex>
            <Text>
              Selecting shapes within the inner star activates a variety of
              possible synth patterns. Patterns can be played simultaneously by
              seleting multiple shapes
            </Text>
          </Box>
          <Box borderTop="1px solid #ddd" p="3" mt="3">
            <Flex justifyContent="center">
              <Box maxWidth="150px">
                <Image
                  src="/effect-diamond.png"
                  alt=""
                  width={220}
                  height={228}
                />
              </Box>
            </Flex>
            <Text>
              Smaller stars on each corner of the central star control effects:
              delay, reverb, and pitch shift.
            </Text>
          </Box>
          <Box borderTop="1px solid #ddd" p="3" mt="3">
            <Flex justifyContent="center">
              <Box maxWidth="150px">
                <Image
                  src="/center-square.png"
                  alt=""
                  width={138}
                  height={138}
                />
              </Box>
            </Flex>
            <Text>
              To reset all effects, select the yellow square at the center of
              the interface.
            </Text>
          </Box>
          <Box borderTop="1px solid #ddd" p="3" mt="3">
            <Flex justifyContent="center">
              <Box maxWidth="150px">
                <Image
                  src="/green-diamond.png"
                  alt=""
                  width={1222}
                  height={1212}
                />
              </Box>
            </Flex>
            <Text>
              The outer green diamond controls a separate synth sequence with
              its own effects.
            </Text>
          </Box>
          <Box borderTop="1px solid #ddd" p="3" mt="3">
            <Flex justifyContent="center">
              <Box maxWidth="150px">
                <Image
                  src="/outer-triangle.png"
                  alt=""
                  width={530}
                  height={534}
                />
              </Box>
            </Flex>
            <Text>
              The four outer triangles control global parameters: volume and
              tempo.
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
