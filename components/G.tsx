"use client";

import React, { SVGProps } from "react";
import { useFabric } from "./FabricProvider";

interface GProps extends SVGProps<SVGGElement> {
  /** x-coordinate on the Fabric grid */
  x?: number;
  /** y-coordinate on the Fabric grid */
  y?: number;
  children: React.ReactNode;
}

/**
 * <g> with cellSize based translate, for use within Fabric
 */
export default function G({ x, y, children, ...rest }: GProps) {
  const { cellSize } = useFabric();
  return (
    <g
      transform={`translate(${x ? x * cellSize : 0}, ${y ? y * cellSize : 0})`}
      {...rest}
    >
      {children}
    </g>
  );
}
