import { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, {
  withDelay,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { MaskedSkeletonProps } from "./type";
import { getXYPosition, getGradientColors } from "./utils";

export const MaskedSkeleton = ({
  colors,
  maskElement,
  delay = 500,
  duration = 2000,
  direction = "leftToRight",
}: MaskedSkeletonProps) => {
  const translate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  const isVertical =
    direction.startsWith("left") || direction.startsWith("right");

  const animate = useCallback(
    (start: number, end: number) => {
      "worklet";
      translate.value = withDelay(
        delay,
        withRepeat(
          withSequence(
            withTiming(start, { duration: 0 }),
            withTiming(end, { duration })
          ),
          -1
        )
      );
    },
    [duration, delay, dimension.width, translate]
  );

  useEffect(() => {
    const { width, height } = dimension;
    if (!width || !height) {
      return;
    }

    opacity.value = withDelay(delay, withTiming(1));

    switch (direction) {
      case "rightToLeft":
        animate(width, -width);
        break;
      case "topToBottom":
        animate(-height, height);
        break;
      case "bottomToTop":
        animate(height, -height);
        break;
      case "leftToRight":
      default:
        animate(-width, width);
    }

    return () => {
      cancelAnimationFrame(translate.value);
      opacity.value = 0;
      translate.value = 0;
    };
  }, [duration, dimension.width, dimension.height, direction]);

  const onLayout = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = event;
    setDimension({ width, height });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        isVertical
          ? {
              translateX: translate.value,
            }
          : {
              translateY: translate.value,
            },
      ],
    };
  });

  return (
    <MaskedView
      style={[{ width: "100%", }]}
      maskElement={maskElement}
      onLayout={onLayout}
    >
      <Animated.View style={[{ backgroundColor: colors[0] }]}>
        <Animated.View style={animatedStyle}>
          <LinearGradient
            style={styles.gradient}
            {...getXYPosition(direction)}
            colors={getGradientColors(colors)}
          />
        </Animated.View>
      </Animated.View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
  },
});
