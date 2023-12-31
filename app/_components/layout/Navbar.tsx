"use client";

import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import styles from "../../page.module.css";

export default function Navbar() {
  return (
    <Flex
      as="header"
      p={3}
      justifyContent="space-between"
      flexDir={["column", null, "row"]}
    >
      <Box marginTop={-3}>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Heading
            fontSize={{ base: "md", sm: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="medium"
            color="black"
          >
            Вишиванка.js
            <span className={styles.logoSlash}>/</span>Vyshyvanka.js
          </Heading>
        </Link>
      </Box>
      <Flex alignItems="center" justifyContent={["flex-end"]}>
        <Link href="./about" color="blue.600" marginLeft="3">
          About
        </Link>
        <Link href="./draw" color="blue.600" marginLeft="3">
          Draw
        </Link>
        <Link href="./gallery" color="blue.600" marginLeft="3">
          Gallery
        </Link>
        <Link href="./" color="blue.600" marginLeft="3">
          Interface
        </Link>
      </Flex>
    </Flex>
  );
}
