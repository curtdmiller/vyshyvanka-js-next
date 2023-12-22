"use client";

import * as React from "react";
import * as Tone from "tone";
import { PatternName } from "tone/build/esm/event/PatternGenerator";
import { IsoTriangle } from "@/components/shapes/IsoTriangle";
import { defaultFMSettings } from "@/tone/synth-defaults";
import { colors } from "@/theme/colors";

interface Props {
  patternContent: Tone.Unit.Note[];
  patternDirection: PatternName;
  triangles: Array<React.ComponentPropsWithoutRef<typeof IsoTriangle>>;
  synthVol?: number;
}

/** Pair of triangles that make up the background of the inner diamond */
function TriangleGroup({
  patternContent,
  patternDirection,
  triangles,
  synthVol,
}: Props) {
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef<null | Tone.FMSynth>(null);
  const pattern = React.useRef<null | Tone.Pattern<Tone.Unit.Note>>(null);
  const channel = React.useRef<null | Tone.Channel>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: synthVol ? synthVol : -6 });
    channel.current.send("synth-channel");
    synth.current = new Tone.FMSynth({ ...defaultFMSettings }).connect(
      channel.current
    );
    return () => {
      synth.current?.dispose();
    };
  }, [synthVol]);

  React.useEffect(() => {
    if (selected) {
      pattern.current = new Tone.Pattern(
        function (time, note) {
          synth.current?.triggerAttackRelease(note, "16n", time);
        },
        patternContent,
        patternDirection
      ).start(0);
    } else {
      pattern.current?.stop(0);
      pattern.current?.dispose();
    }
    return () => {
      pattern.current?.dispose();
    };
  }, [selected, patternContent, patternDirection]);

  return triangles.map((triangle) => (
    <IsoTriangle
      orientation={triangle.orientation}
      size={triangle.size}
      fill={triangle.fill}
      x={triangle.x}
      y={triangle.y}
      selected={selected}
      setSelected={setSelected}
      key={`tri-${triangle.orientation}-${triangle.x}-${triangle.y}`}
    />
  ));
}

export default function InnerTriangles() {
  return (
    <g>
      <TriangleGroup
        patternContent={["D4", "F4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "north", size: 9, x: 8, y: 13, fill: colors.red },
          { orientation: "west", size: 9, x: 13, y: 8, fill: colors.red },
        ]}
      />
      <TriangleGroup
        patternContent={["D4", "E4", "Eb4", "E4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 8, fill: colors.red },
          { orientation: "north", size: 9, x: 20, y: 13, fill: colors.red },
        ]}
      />
      <TriangleGroup
        patternContent={["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"]}
        patternDirection="down"
        triangles={[
          { orientation: "south", size: 9, x: 8, y: 19, fill: colors.red },
          { orientation: "west", size: 9, x: 13, y: 20, fill: colors.red },
        ]}
      />
      <TriangleGroup
        patternContent={["D2"]}
        patternDirection="down"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 20, fill: colors.red },
          { orientation: "south", size: 9, x: 20, y: 19, fill: colors.red },
        ]}
        synthVol={0}
      />
    </g>
  );
}
