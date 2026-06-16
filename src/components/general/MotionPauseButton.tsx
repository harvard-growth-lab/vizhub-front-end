import React, { useState } from "react";
import styled from "styled-components";
import { lighten } from "polished";

const toggleColor = "#495872";

// Shared across pages so a user's pause choice persists as they navigate.
const MOTION_PREF_KEY = "hubMotionPaused";

const Button = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 5;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${toggleColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${lighten(0.08, toggleColor)};
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  svg {
    fill: #fff;
  }
`;

// Owns the paused state, its persistence, and the reduced-motion default.
// Returns the current value plus a toggle, so the host can also drive its
// own animation (e.g. animation-play-state) from the same source of truth.
export const useMotionPaused = (): [boolean, () => void] => {
  const [paused, setPaused] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }
    try {
      const stored = window.localStorage.getItem(MOTION_PREF_KEY);
      if (stored !== null) {
        return stored === "true";
      }
    } catch {
      // localStorage may be unavailable (e.g. private mode); fall through
    }
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    try {
      window.localStorage.setItem(MOTION_PREF_KEY, String(next));
    } catch {
      // ignore persistence failures
    }
  };

  return [paused, toggle];
};

interface Props {
  paused: boolean;
  onToggle: () => void;
}

const MotionPauseButton = ({ paused, onToggle }: Props) => {
  const label = paused
    ? "Play background animation"
    : "Pause background animation";

  return (
    <Button
      type={"button"}
      onClick={onToggle}
      aria-pressed={paused}
      aria-label={label}
      title={label}
    >
      {paused ? (
        <svg width={"16"} height={"16"} viewBox={"0 0 16 16"} aria-hidden={"true"}>
          <path d={"M4.5 3.5 L12.5 8 L4.5 12.5 Z"} />
        </svg>
      ) : (
        <svg width={"16"} height={"16"} viewBox={"0 0 16 16"} aria-hidden={"true"}>
          <rect x={"4"} y={"3"} width={"3"} height={"10"} rx={"1"} />
          <rect x={"9"} y={"3"} width={"3"} height={"10"} rx={"1"} />
        </svg>
      )}
    </Button>
  );
};

export default MotionPauseButton;
