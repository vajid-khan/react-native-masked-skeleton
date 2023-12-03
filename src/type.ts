import { ReactElement } from "react";
import { ViewProps } from "react-native";

export type Direction =
  | "leftToRight"
  | "rightToLeft"
  | "topToBottom"
  | "bottomToTop";

export type MaskedSkeletonProps = {
  /**
   * ReactElement for the Skeleton. Passed to MaskedView.
   */
  maskElement: ReactElement;
  /**
   * Start animation with a delay.
   */
  delay?: number;
  /**
   * Animation Duration.
   */
  duration?: number;
  /**
   * Animation Direction.
   */
  direction?: Direction;
  /**
   * Gradient colors.
   */
  colors: string[];
};

export type SkeletonProps = ViewProps 