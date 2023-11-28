"use client";

import React from "react";
import {
  chakra,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";

export default function About() {
  return (
    <Container>
      <Heading as="h2" size="xl" mb="6" mt="6">
        About
      </Heading>
      <Text mt="2" mb="2">
        <chakra.span fontWeight="bold">Vyshyvanka.js</chakra.span> is a
        cross-stitch embroidery interface for drawing and editing embroidery
        patterns and an instrumental interface that sonifies embroidery patterns
        through mouse click interactions. Vyshyvanka is a name for a traditional
        embroidered Ukrainian shirt with distinctive patterns that vary by
        region and carry meanings that range from narrative to spiritual and
        mythological, acting as protective talismans for the wearer. Users of
        Vyshyvanka.js can use the examples on the site for inspiration and
        attempt to draw their own patterns in addition to interacting with the
        sound interface we have created.
      </Text>
      <Heading as="h3" size="lg" mb="3" mt="3">
        Common Patterns/Symbols
      </Heading>
      <List>
        <ListItem mt="2" mb="2">
          <b>Circular patterns</b> embody divine perfection, also symbolising
          the sun
          <Image src="/about/circles.jpeg" alt="" width="637" height="505" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Square</b> symbolises perfection/harmony/order/earth - divided into
          equal portions fields 4 corners of the square - natural events
          occurring in fours, such as change of seasons, etc
          <Image src="/about/square.jpg" alt="" width="800" height="334" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Triangle:</b> narrow gate that leads to eternal life, also
          associated with fire Triangles whose tips touching each other - world
          and anti-world - transition from one world onto the other
          <Image src="/about/triangle.jpg" alt="" width="1000" height="488" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Spirals</b> (vertically arranged parallel zigzags) - wavy lines -
          the fluidity of life - represents water
          <Image src="/about/spirals.jpg" alt="" width="800" height="106" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Chevrons</b> - open triangles - pointing down: female symbol -
          pointing upward: male
          <Image src="/about/chevrons.jpg" alt="" width="800" height="158" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Cross</b> - symbolises centricity/not separation of forces/two
          crosses forms an eight-pointed star (a union of male and female)
          <Image src="/about/cross.jpg" alt="" width="800" height="279" />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Star</b> a cross superimposed with an oblique cross (male and
          female) joined together an 8 cornered star (octahedron) - an energy
          field formed around living beings
          <SimpleGrid columns={3}>
            <Image src="/about/star1.jpg" alt="" width="800" height="779" />
            <Image src="/about/star2.jpg" alt="" width="800" height="778" />
            <Image src="/about/star3.jpg" alt="" width="800" height="788" />
          </SimpleGrid>
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Winding Dance Lines</b> - a symbol of vitality, harmonious flow of
          life
          <Image
            src="/about/windingdances.jpg"
            alt=""
            width="1370"
            height="100"
          />
        </ListItem>
        <ListItem mt="2" mb="2">
          <b>Lozenges</b> (two triangles also rhombus) - fertility, female/male
          relations Lozenges with hooks - heavenly moisture that gives life
          <Image src="/about/lozenge.jpeg" alt="" width="800" height="633" />
        </ListItem>
      </List>
      <Heading as="h3" size="lg" mb="3" mt="3">
        The Interface
      </Heading>
      <Text mt="2" mb="2">
        For the current iteration of the instrumental interface, we chose to
        focus on the star that combines a few shapes like superimposed crosses,
        forming eight triangle shapes within a square. The star to us represents
        an energy field that is both radiant and threatening as a magical
        ethereal body composed of combustible gas materials. In the interface,
        this energy is represented by a combination of note patterns sonified
        through different synths in Tone.js.
      </Text>
      <Text mt="2" mb="2">
        We took inspiration from Tom Johnson’s illustrated music in which he
        signifies different geometrical shapes by calculating repeatable note
        instances for different triangles, squares and block patterns. In the
        star shape, the triangles and squares use the repeating patterns centred
        around D Dorian and C Aeolian modes. These modes are representative of
        early Ukrainian traditional music. Thus the driving energy of the
        repeatable patterns with geometrical considerations for repeatability of
        certain notes within a D Dorian mode through Tone.js synths patterns and
        sequences is what the user mostly hears when interacting with the
        star-shaped instrumental interface. The interface is designed with
        delay, reverb, pitch-shift up and down at each corner of the star
        diamond. Also, one can change the velocity and volume of the patterns by
        clicking on four black corners of the star design.
      </Text>
      <Heading as="h3" size="lg" mb="3" mt="3">
        Resources
      </Heading>
      <cite>
        <Link
          href="https://kutsenko.udpu.edu.ua/wp-content/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC.pdf"
          rel="noreferrer nofollow"
          target="_blank"
          color="blue.600"
        >
          Ukrainian Folk Costumes
        </Link>{" "}
        (alternate link:{" "}
        <Link
          href="https://web.archive.org/web/20191014114157/https://kutsenko.udpu.edu.ua/wp-content/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC.pdf"
          rel="noreferrer nofollow"
          target="_blank"
          color="blue.600"
        >
          Archived
        </Link>
        ) (PDF) (in Ukrainian and English). Translated by Paszczak-Tracz,
        Orysia. Toronto — Philadelphia: the World Federation of Ukrainian
        Women&apos;s Organizations. Folk Art Committee. LCCN 90-071681.{" "}
      </cite>
      <Heading as="h4" size="m" mb="3" mt="3">
        Symbols
      </Heading>
      <Text mt="2" mb="2">
        Euromaidan Press:{" "}
        <Link
          href="http://euromaidanpress.com/2016/05/19/secret-ancestral-codes-12-main-symbols-in-ukrainian-embroidery/"
          rel="noreferrer nofollow"
          target="_blank"
          color="blue.600"
        >
          Secret ancestral codes: 12 main symbols in Ukrainian embroidery
        </Link>
      </Text>
      <Heading as="h4" size="m" mb="3" mt="3">
        Fashion
      </Heading>
      <Text mt="2" mb="2">
        Fashion For Fashionlovers:{" "}
        <Link
          href="https://web.archive.org/web/20150529221857/http://fashionforfashionlovers.com/2015/05/14/designers-to-watch-vyshyvankas-by-vita-kin-traditional-ukrainian-chic/"
          rel="noreferrer nofollow"
          target="_blank"
          color="blue.600"
        >
          DESIGNERS TO WATCH: Vyshyvankas by Vita Kin – Traditional Ukrainian
          Chic
        </Link>
      </Text>
      <Text mt="2" mb="2">
        Harper&apos;s Bazaar:{" "}
        <Link
          href="https://www.harpersbazaar.com/fashion/trends/a10578/were-obsessed-vita-kin/"
          rel="noreferrer nofollow"
          target="_blank"
          color="blue.600"
        >
          We&apos;re Obsessed: Vita Kin Introduces The Perfect Bohemia
        </Link>
      </Text>
    </Container>
  );
}
