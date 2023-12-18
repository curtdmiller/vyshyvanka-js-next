"use client";

import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Spirals from "@/components/tests/spirals";
import WindingDance from "@/components/tests/winding-dance";
import XSquare from "@/components/tests/x-square";
import NestedDiamonds from "@/components/tests/nested-diamonds";
import NestedPlus from "@/components/tests/nested-plus";
import PlusCross from "@/components/tests/plus-cross";
import PlusStars from "@/components/tests/plus-stars";
import SquareTest from "@/components/tests/square-test";
import LineTest from "@/components/tests/line-test";
import StarTest from "@/components/tests/star-test";
import EmptyDiamond from "@/components/tests/empty-diamond";
import NoiseSquare from "@/components/tests/noise-square";
import IsoscelesTriangles from "@/components/tests/iso-triangles";
import XStitchSet from "@/components/tests/x-stitch-set";
import StarDiamond from "@/components/tests/star-diamond-test";

const menu = [
  { title: "Spirals", Component: Spirals },
  {
    title: "Winding Dance",
    Component: WindingDance,
  },
  { title: "X Square", Component: XSquare },
  {
    title: "Nested Diamonds",
    Component: NestedDiamonds,
  },
  {
    title: "Nested Plus",
    Component: NestedPlus,
  },
  { title: "Plus Cross", Component: PlusCross },
  { title: "Plus Star", Component: PlusStars },
  {
    title: "Square Test",
    Component: SquareTest,
  },
  { title: "Line Test", Component: LineTest },
  { title: "Star Test", Component: StarTest },
  {
    title: "Star Diamond Test",
    Component: StarDiamond,
  },
  {
    title: "Empty Diamond",
    Component: EmptyDiamond,
  },
  // {
  //   title: "Noise Square",
  //   Component: NoiseSquare,
  // },
  {
    title: "Isosceles Triangles",
    Component: IsoscelesTriangles,
  },
  {
    title: "X Stitch Set",
    Component: XStitchSet,
  },
];

export default function Gallery() {
  return (
    <Container>
      <Heading as="h2" size="xl" mb="6" mt="6">
        Gallery
      </Heading>
      <Text>
        Transcriptions of real embroidery patterns, tests of basic shape
        components, sketches and copies of Vyshyvanka design elements
      </Text>
      {menu.map(({ title, Component }) => (
        <Box mt="8" mb="6" key={title}>
          <Heading as="h3" size="lg" mb="4">
            {title}
          </Heading>
          <Component />
        </Box>
      ))}
    </Container>
  );
}
