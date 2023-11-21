"use client";

import React from "react";
import useStar from "./StarContext";
import Square from "@/components/shapes/Square";
import { colors } from "@/theme/colors";
import Single from "@/components/shapes/Single";

export default function InnerSquare() {
  const { dispatch } = useStar();

  return (
    <g
      onClick={() => {
        dispatch({ type: "reset" });
      }}
    >
      <Square width={3} x={17} y={17} stroke={colors.yellow} />
      <Single x={18} y={18} fill={colors.gray} />
    </g>
  );
}
