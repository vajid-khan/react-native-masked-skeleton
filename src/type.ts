import { ReactElement } from "react";
import { ViewProps } from "react-native";

export type Direction =
  | "leftToRight"
  | "rightToLeft"
  | "topToBottom"
  | "bottomToTop";

export type LoaderProps = {
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
   * Forground colors.
   */
  color: string;
  /**
   * Background colors.
   */
  backgroundColor: string;
};

export type SkeletonProps = ViewProps;
