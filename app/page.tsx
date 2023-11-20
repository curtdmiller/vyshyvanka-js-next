"use client";

import { Container, List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <Container>
      <List>
        <ListItem>
          <Link href="/star-diamond" color="blue.600">
            Star Interface
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
