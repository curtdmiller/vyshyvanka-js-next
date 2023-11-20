"use client";

import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import styles from "../page.module.css";

export default function Navbar() {
  return (
    <Flex as="header" p={6}>
      <Box marginTop={-3}>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Heading fontSize="3xl" fontWeight="medium">
            Вишиванка.js<span className={styles.logoSlash}>/</span>Vyshyvanka.js
          </Heading>
        </Link>
      </Box>
    </Flex>
  );
}
