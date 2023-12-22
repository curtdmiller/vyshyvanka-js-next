"use client";

import * as React from "react";
import * as Tone from "tone";

interface State {
  pitchShiftPitch: number;
  delayMute: boolean;
  reverbMute: boolean;
  volumeLevel: number;
}
type Action =
  | { type: "reset" }
  | { type: "setVolume"; volume: number }
  | { type: "setPitchShift"; pitch: number }
  | { type: "setDelayStatus"; isMuted: boolean }
  | { type: "setReverbStatus"; isMuted: boolean }
  | { type: "toggleDelay" }
  | { type: "toggleReverb" };

type Dispatch = (action: Action) => void;

const defaultState: State = {
  pitchShiftPitch: 0,
  volumeLevel: -6,
  reverbMute: true,
  delayMute: true,
};

function starReducer(state: State, action: Action): State {
  switch (action.type) {
    case "setVolume":
      return { ...state, volumeLevel: action.volume };
    case "setPitchShift":
      return { ...state, pitchShiftPitch: action.pitch };
    case "setDelayStatus":
      return { ...state, delayMute: action.isMuted };
    case "setReverbStatus":
      return { ...state, reverbMute: action.isMuted };
    case "toggleDelay":
      return { ...state, delayMute: !state.delayMute };
    case "toggleReverb":
      return { ...state, reverbMute: !state.reverbMute };
    case "reset":
      return defaultState;
  }
}

export const StarContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export function StarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const volume = React.useRef<null | Tone.Volume>(null);
  const pitchShift = React.useRef<null | Tone.PitchShift>(null);
  const delayGain = React.useRef<null | Tone.Gain>(null);
  const delay = React.useRef<null | Tone.FeedbackDelay>(null);
  const reverbGain = React.useRef<null | Tone.Gain>(null);
  const reverb = React.useRef<null | Tone.Reverb>(null);
  const synthChannel = React.useRef<null | Tone.Channel>(null);
  const diamondChannel = React.useRef<null | Tone.Channel>(null);
  const [state, dispatch] = React.useReducer(starReducer, defaultState);

  React.useEffect(() => {
    volume.current = new Tone.Volume(-6).toDestination();
    pitchShift.current = new Tone.PitchShift().connect(volume.current);
    delayGain.current = new Tone.Gain(0).connect(pitchShift.current);
    delay.current = new Tone.FeedbackDelay({
      maxDelay: 2,
      feedback: 0.5,
      wet: 0.5,
    }).connect(delayGain.current);
    reverbGain.current = new Tone.Gain(0).connect(pitchShift.current);
    reverb.current = new Tone.Reverb({ decay: 4, wet: 1 }).connect(
      reverbGain.current
    );
    synthChannel.current = new Tone.Channel({ volume: 0 }).fan(
      delay.current,
      reverb.current,
      pitchShift.current
    );
    synthChannel.current.receive("synth-channel");
    diamondChannel.current = new Tone.Channel({ volume: 0 }).fan(
      reverb.current,
      pitchShift.current
    );
    diamondChannel.current.receive("diamond-channel");

    return () => {
      synthChannel.current?.dispose();
      diamondChannel.current?.dispose();
      pitchShift.current?.dispose();
      delay.current?.dispose();
      reverb.current?.dispose();
      volume.current?.dispose();
      delayGain.current?.dispose();
      reverbGain.current?.dispose();
    };
  }, []);

  React.useEffect(() => {
    volume.current?.volume.rampTo(state.volumeLevel, 0.5);
  }, [state.volumeLevel]);

  React.useEffect(() => {
    if (pitchShift.current) pitchShift.current.pitch = state.pitchShiftPitch;
  }, [state.pitchShiftPitch]);

  React.useEffect(() => {
    delayGain.current?.gain.rampTo(state.delayMute ? 0 : 0.9, 1);
  }, [state.delayMute]);

  React.useEffect(() => {
    reverbGain.current?.gain.rampTo(state.reverbMute ? 0 : 0.9, 0.5);
  }, [state.reverbMute]);

  return (
    <StarContext.Provider value={{ state, dispatch }}>
      {children}
    </StarContext.Provider>
  );
}

export default function useStar() {
  const context = React.useContext(StarContext);
  if (context === undefined) {
    throw Error("useStar must be used within a StarProvider");
  }
  return context;
}
