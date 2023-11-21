"use client";

import { colors } from "@/theme/colors";
import * as React from "react";

interface State {
  cellSize: number;
  /** The color of a selected square */
  selectFill: string;
}

export const FabricContext = React.createContext<State | undefined>(undefined);

interface ProviderProps {
  cellSize?: number;
  selectFill?: string;
  children: React.ReactNode;
}

/**
 * Provider used by Fabric to provide cell size to all shapes
 */
export function FabricProvider({
  cellSize = 24,
  selectFill = colors.blue,
  children,
}: ProviderProps) {
  return (
    <FabricContext.Provider value={{ cellSize, selectFill }}>
      {children}
    </FabricContext.Provider>
  );
}

export function useFabric() {
  const context = React.useContext(FabricContext);
  if (context === undefined) {
    throw Error("useFabric must be used within a FabricProvider");
  }
  return context;
}
