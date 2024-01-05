"use client";

import * as React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";
// import Link from "next/link";
import { Link } from "@chakra-ui/next-js";

export default function DonationBanner() {
  return (
    <Box w="100%" p="8" backgroundColor="blue.600">
      <Text color="white" fontSize="2xl" textAlign="center">
        Please consider donating to our fundraiser with{" "}
        <chakra.span fontStyle="italic">Razom for Ukraine</chakra.span> to
        provide humanitarian and defense support for Ukraine:{" "}
        <Link href="https://htru.io/SGF1" color="yellow.300">
          https://htru.io/SGF1
        </Link>
      </Text>
    </Box>
  );
}
