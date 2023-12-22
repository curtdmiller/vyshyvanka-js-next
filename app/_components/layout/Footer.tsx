"use client";

import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Footer() {
  return (
    <Flex as="footer" p={3}>
      <Text>
        <Link href="http://www.solomiyamoroz.com/" color="blue.600">
          Solomiya Moroz
        </Link>{" "}
        &{" "}
        <Link href="https://www.curtdmiller.com/" color="blue.600">
          Curt Miller
        </Link>
      </Text>
    </Flex>
  );
}
