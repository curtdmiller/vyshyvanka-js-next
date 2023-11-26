"use client";

import * as React from "react";
import * as Tone from "tone";
import useStar from "./StarContext";
import RightTriangle from "@/components/shapes/RightTriangle";
import { colors } from "@/theme/colors";

function G({
  children,
  ...rest
}: { children: React.ReactNode } & React.SVGProps<SVGGElement>) {
  const [mousedown, setMousedown] = React.useState(false);

  return (
    <g
      onMouseDown={(e) => {
        if (!e.shiftKey) {
          setMousedown(true);
        }
      }}
      onMouseUp={(e) => {
        if (!e.shiftKey) {
          setMousedown(false);
        }
      }}
      {...rest}
      style={{ opacity: mousedown ? 0.5 : 1 }}
    >
      {children}
    </g>
  );
}

export default function OuterTriangles() {
  const { state, dispatch } = useStar();

  function tempoDown(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey) {
      Tone.Transport.bpm.value = Tone.Transport.bpm.value - 8;
    }
  }

  function tempoUp(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey) {
      Tone.Transport.bpm.value = Tone.Transport.bpm.value + 8;
    }
  }

  function volumeUp(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey && state.volumeLevel < -4) {
      dispatch({ type: "setVolume", volume: state.volumeLevel + 2 });
    }
  }

  function volumeDown(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey) {
      dispatch({ type: "setVolume", volume: state.volumeLevel - 2 });
    }
  }

  return (
    <g>
      <G onClick={tempoDown}>
        <RightTriangle
          orientation="SE"
          sideLength={16}
          fill={colors.gray}
          x={0}
          y={0}
        />
      </G>
      <G onClick={tempoUp}>
        <RightTriangle
          orientation="SW"
          sideLength={16}
          fill={colors.gray}
          x={21}
          y={0}
        />
      </G>
      <G onClick={volumeUp}>
        <RightTriangle
          orientation="NW"
          sideLength={16}
          fill={colors.gray}
          x={21}
          y={21}
        />
      </G>
      <G onClick={volumeDown}>
        <RightTriangle
          orientation="NE"
          sideLength={16}
          fill={colors.gray}
          x={0}
          y={21}
        />
      </G>
    </g>
  );
}
