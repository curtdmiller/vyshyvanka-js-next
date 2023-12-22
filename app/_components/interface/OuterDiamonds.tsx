"use client";

import Diamond from "@/components/shapes/Diamond";
import { colors } from "@/theme/colors";
import * as React from "react";
import * as Tone from "tone";

export default function OuterDiamonds() {
  const [selectedGreen, setSelectedGreen] = React.useState(false);
  const synth = React.useRef<null | Tone.FMSynth>(null);
  const delay = React.useRef<null | Tone.FeedbackDelay>(null);
  const channel = React.useRef<null | Tone.Channel>(null);
  const synthSeq = React.useRef<null | Tone.Sequence>(null);
  const delaySeq = React.useRef<null | Tone.Sequence>(null);

  React.useEffect(() => {
    channel.current = new Tone.Channel({ volume: -12 });
    channel.current.send("diamond-channel");
    delay.current = new Tone.FeedbackDelay({
      maxDelay: 2,
      feedback: 0.5,
      wet: 0.2,
    });
    synth.current = new Tone.FMSynth({ volume: 0 }).chain(
      delay.current,
      channel.current
    );

    return () => {
      delay.current?.dispose();
      synth.current?.dispose();
      channel.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (selectedGreen) {
      synthSeq.current = new Tone.Sequence(
        (time, note) => {
          synth.current?.triggerAttackRelease(note, "16t", time);
        },
        ["D4", ["F4", "G4", "A4", "458"]],
        "4n"
      ).start(0);
      delaySeq.current = new Tone.Sequence(
        (time, delayTime) => {
          delay.current?.delayTime.rampTo(delayTime, 0.25, time);
        },
        ["4n", "8n", "16n"],
        "1n"
      ).start(10);
    } else {
      delaySeq.current?.stop();
      delaySeq.current?.dispose();
      synthSeq.current?.stop();
      synthSeq.current?.dispose();
    }
    return () => {
      delaySeq.current?.stop();
      delaySeq.current?.dispose();
      synthSeq.current?.stop();
      synthSeq.current?.dispose();
    };
  }, [selectedGreen]);

  return (
    <g>
      <Diamond
        diameter={37}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={35}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={33}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={31}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond diameter={27} cx={18} cy={18} stroke={colors.darkGray} />
    </g>
  );
}
