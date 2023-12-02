import { easeGradient } from "react-native-easing-gradient";

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

export const getGradientColors = (colors: string[]) => {
  const start = getEasingColors(colors);
  const end = getEasingColors(colors.reverse());
  return [...start, ...end];
};

const getEasingColors = (colors: string[]) => {
  const _colors = colors.reduce((acc, current, i) => {
    return {
      ...acc,
      [i]: {
        color: current,
      },
    };
  }, {});

  return easeGradient({
    colorStops: _colors,
    extraColorStopsPerTransition: 24,
  }).colors;
};
