"use client";

import Diamond from "@/components/shapes/Diamond";
import Single from "@/components/shapes/Single";
import { colors } from "@/theme/colors";
import * as React from "react";
import useStar from "./StarContext";
import Square from "@/components/shapes/Square";

interface CornerStarProps {
  cx: number;
  cy: number;
  selected: boolean;
  setSelected?: (selected: boolean) => void;
  onClick?: React.DOMAttributes<SVGGElement>["onClick"];
}
function CornerStar({
  cx,
  cy,
  selected,
  setSelected,
  onClick,
}: CornerStarProps) {
  return (
    <g onClick={onClick}>
      <Diamond
        diameter={5}
        cx={cx}
        cy={cy}
        stroke={colors.gray}
        fill={colors.gray}
        filled
        selected={selected}
        setSelected={setSelected}
      />
      <Single
        x={cx}
        y={cy}
        fill={colors.yellow}
        selected={selected}
        setSelected={setSelected}
      />
    </g>
  );
}

export default function CornerStars() {
  const { state, dispatch } = useStar();

  function northonClick(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey) {
      dispatch({ type: "setPitchShift", pitch: state.pitchShiftPitch + 1 });
    }
  }

  function southonClick(e: React.MouseEvent<SVGGElement, MouseEvent>) {
    if (!e.shiftKey) {
      dispatch({ type: "setPitchShift", pitch: state.pitchShiftPitch - 1 });
    }
  }
  return (
    <g>
      <CornerStar
        cx={7}
        cy={18}
        selected={!state.delayMute}
        onClick={() => {
          dispatch({ type: "toggleDelay" });
        }}
      />
      <CornerStar
        cx={29}
        cy={18}
        selected={!state.reverbMute}
        onClick={() => {
          dispatch({ type: "toggleReverb" });
        }}
      />
      <CornerStar
        cx={18}
        cy={7}
        selected={state.pitchShiftPitch > 0}
        onClick={northonClick}
      />
      <CornerStar
        cx={18}
        cy={29}
        selected={state.pitchShiftPitch < 0}
        onClick={southonClick}
      />
    </g>
  );
}
