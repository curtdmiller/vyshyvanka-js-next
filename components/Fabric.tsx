"use client";

import React from "react";
import { FabricProvider } from "./FabricProvider";

interface Props {
  gridSize: [number, number];
  /** default is 24 */
  cellSize?: number;
  selectedFill?: string;
  showGrid?: boolean;
  gridColor?: string;
  className?: string;
  children: React.ReactNode;
}

/** SVG Element with sizing and optional gridlines */
const Fabric = React.forwardRef<SVGSVGElement, Props>(
  (
    {
      gridSize,
      cellSize = 24,
      showGrid = false,
      gridColor = "#ffffff",
      selectedFill,
      className,
      children,
    },
    ref
  ) => {
    return (
      <FabricProvider cellSize={cellSize} selectFill={selectedFill}>
        <svg
          ref={ref}
          className={className}
          viewBox={`0 0 ${gridSize[0] * cellSize + 1} ${
            gridSize[1] * cellSize + 1
          }`}
        >
          <defs>
            <pattern
              id="fabric-grid"
              x="0"
              y="0"
              width={cellSize}
              height={cellSize}
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke={gridColor}
                strokeWidth={2}
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke={gridColor}
                strokeWidth={2}
              />
            </pattern>
          </defs>
          {showGrid && (
            <rect width="100%" height="100%" fill="url(#fabric-grid)" />
          )}
          {children}
        </svg>
      </FabricProvider>
    );
  }
);

Fabric.displayName = "Fabric";

export default Fabric;
