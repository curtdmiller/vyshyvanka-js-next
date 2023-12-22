"use client";

import React from "react";
import * as Tone from "tone";
import Line from "@/components/shapes/Line";
import { defaultMonoSettings } from "@/tone/synth-defaults";
import { colors } from "@/theme/colors";

export default function CenterStar() {
  return (
    <g>
      <Horizontal />
      <Vertical />
      <Descending />
      <Ascending />
    </g>
  );
}

function Vertical() {
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef<null | Tone.MonoSynth>(null);
  const pattern = React.useRef<null | Tone.Pattern<Tone.Unit.Frequency>>(null);
  const channel = React.useRef<null | Tone.Channel>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: 0 });
    channel.current.send("synth-channel");
    synth.current = new Tone.MonoSynth({
      ...defaultMonoSettings,
      volume: -15,
    }).connect(channel.current);
    return () => {
      synth.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (selected) {
      pattern.current = new Tone.Pattern<Tone.Unit.Frequency>({
        callback: function (time, note) {
          synth.current?.triggerAttackRelease(
            note as Tone.Unit.Frequency,
            0.8,
            time
          );
        },
        values: ["D4", "F4", "A4", "458"],
        pattern: "random",
        playbackRate: 0.25,
      }).start(0);
    } else {
      pattern.current?.stop(0);
      pattern.current?.dispose();
    }
    return () => {
      pattern.current?.dispose();
    };
  }, [selected, pattern]);

  return (
    <Line
      length={17}
      angle="vertical"
      color={colors.orange}
      x={18}
      y={10}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Horizontal() {
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef<null | Tone.MonoSynth>(null);
  const pattern = React.useRef<null | Tone.Pattern<Tone.Unit.Frequency>>(null);
  const channel = React.useRef<null | Tone.Channel>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: 0 });
    channel.current.send("synth-channel");
    synth.current = new Tone.MonoSynth({
      ...defaultMonoSettings,
      volume: -15,
    }).connect(channel.current);
    return () => {
      synth.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (selected) {
      pattern.current = new Tone.Pattern<Tone.Unit.Frequency>({
        callback: function (time, note) {
          synth.current?.triggerAttackRelease(
            note as Tone.Unit.Frequency,
            0.8,
            time
          );
        },
        values: ["D4", "F4", "A4", "458"],
        pattern: "random",
        playbackRate: 0.25,
      }).start(0);
    } else {
      pattern.current?.stop(0);
      pattern.current?.dispose();
    }
    return () => {
      pattern.current?.dispose();
    };
  }, [selected, pattern]);

  return (
    <Line
      length={17}
      angle="horizontal"
      color={colors.orange}
      x={10}
      y={18}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Ascending() {
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef<null | Tone.MonoSynth>(null);
  const pattern = React.useRef<null | Tone.Pattern<Tone.Unit.Frequency>>(null);
  const channel = React.useRef<null | Tone.Channel>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: 0 });
    channel.current.send("synth-channel");
    synth.current = new Tone.MonoSynth({
      ...defaultMonoSettings,
      volume: -6,
    }).connect(channel.current);
    return () => {
      synth.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (selected) {
      pattern.current = new Tone.Pattern<Tone.Unit.Frequency>(
        function (time, note) {
          synth.current?.triggerAttackRelease(note, 0.1, time);
        },
        ["D4", "F4", "G4", "A4", "458", "C4"],
        "up"
      ).start(0);
    } else {
      pattern.current?.stop(0);
      pattern.current?.dispose();
    }
    return () => {
      pattern.current?.dispose();
    };
  }, [selected, pattern]);

  return (
    <Line
      length={11}
      angle="diagonal-up"
      color={colors.orange}
      x={13}
      y={13}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

function Descending() {
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef<null | Tone.MonoSynth>(null);
  const pattern = React.useRef<null | Tone.Pattern<Tone.Unit.Frequency>>(null);
  const channel = React.useRef<null | Tone.Channel>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: 0 });
    channel.current.send("synth-channel");
    synth.current = new Tone.MonoSynth({
      ...defaultMonoSettings,
      volume: -6,
    }).connect(channel.current);
    return () => {
      synth.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (selected) {
      pattern.current = new Tone.Pattern<Tone.Unit.Frequency>(
        function (time, note) {
          synth.current?.triggerAttackRelease(note, 0.1, time);
        },
        ["D4", "F4", "G4", "A4", "458", "C4"],
        "down"
      ).start(0);
    } else {
      pattern.current?.stop(0);
      pattern.current?.dispose();
    }
    return () => {
      pattern.current?.dispose();
    };
  }, [selected, pattern]);

  return (
    <Line
      length={11}
      angle="diagonal-down"
      color={colors.orange}
      x={13}
      y={13}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
