import { colord } from "colord";

import { Direction } from "./type";

export const getXYPosition = (direction: Direction) => {
  switch (direction) {
    case "topToBottom":
    case "bottomToTop":
      return {
        end: { x: 0, y: 0 },
        start: { x: 0, y: 1 },
      };
    case "leftToRight":
    case "rightToLeft":
    default:
      return {
        end: { x: 0, y: 0 },
        start: { x: 1, y: 0 },
      };
  }
};

export const getGradientColors = (color: string, samples = 12) => {
  const start = [];
  for (let i = 0; i < samples; i++) {
    start.push(
      colord(color)
        .lighten(i * -0.1)
        .toHex()
    );
  }
  return [...start, ...start.toReversed()];
};
