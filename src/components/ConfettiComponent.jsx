import React from "react";
import { useWindowSizes } from "react-use-window-sizes";
import Confetti from "react-confetti";

export function ConfettiComponent() {
  const { width, height } = useWindowSizes();
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={250}
      gravity={0.03}
    />
  );
}
