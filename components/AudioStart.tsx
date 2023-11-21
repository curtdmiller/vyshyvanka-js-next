"use client";

import React from "react";
import * as Tone from "tone";
import { FaRegPlayCircle } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

/**
 * A start overlay, shown if Tone is not running.
 */
export default function AudioStart() {
  const [isStarted, setIsStarted] = React.useState(
    Tone.context.state === "running"
  );

  const handleStart = async () => {
    await Tone.start();
    Tone.Transport.set({ bpm: 160 });
    Tone.Transport.start();
    setIsStarted(true);
  };

  // prevent any other interactivity with this full screen start overlay if audio context is paused
  if (!isStarted) {
    return (
      <Box
        display="flex"
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        overflow="hidden"
        backgroundColor="blackAlpha.700"
        zIndex={1000}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="button"
          padding="2"
          fontSize="9xl"
          color="white"
          aria-label="Start audio"
          onClick={handleStart}
        >
          <FaRegPlayCircle />
        </Box>
      </Box>
    );
  }

  return null;
}
