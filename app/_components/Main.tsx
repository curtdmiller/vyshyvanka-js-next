"use client";

import * as React from "react";
import { Flex } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="main" flexDir="column" alignItems="center" minH="100vh">
      {children}
    </Flex>
  );
}
