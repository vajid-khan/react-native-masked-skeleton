import React from "react";
import { View } from "react-native";

import { SkeletonProps } from "./type";

export const Skeleton = (props: SkeletonProps) => (
  <View {...props} style={[props.style, { backgroundColor: "#fff" }]} />
);
