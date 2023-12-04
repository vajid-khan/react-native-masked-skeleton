import React, { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, LayoutChangeEvent, StyleSheet } from "react-native";
import Animated, {
  withDelay,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { LoaderProps } from "./type";
import { getXYPosition, getGradientColors } from "./utils";

export const Loader = ({
  color,
  maskElement,
  delay = 500,
  duration = 2000,
  backgroundColor,
  direction = "leftToRight",
}: LoaderProps) => {
  const translate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  const isHorizontal =
    direction.startsWith("left") || direction.startsWith("right");

  const animate = useCallback(
    ({
      start,
      end,
      delay,
      duration,
    }: {
      start: number;
      end: number;
      delay: number;
      duration: number;
    }) => {
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
    [translate]
  );

  useEffect(() => {
    const { width, height } = dimension;
    if (!width || !height) {
      return;
    }

    opacity.value = withDelay(delay, withTiming(1, { duration: 100 }));

    switch (direction) {
      case "rightToLeft":
        animate({
          delay,
          duration,
          start: width,
          end: -width,
        });
        break;
      case "topToBottom":
        animate({
          delay,
          duration,
          start: -height,
          end: height,
        });
        break;
      case "bottomToTop":
        animate({
          delay,
          duration,
          start: height,
          end: -height,
        });
        break;
      case "leftToRight":
      default:
        animate({
          delay,
          duration,
          start: -width,
          end: width,
        });
    }

    return () => {
      cancelAnimationFrame(translate.value);
      opacity.value = 0;
      translate.value = 0;
    };
  }, [delay, duration, dimension.width, dimension.height, direction]);

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
        isHorizontal
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
    <MaskedView onLayout={onLayout} maskElement={maskElement}>
      <View style={{ backgroundColor }}>
        <Animated.View style={animatedStyle}>
          <LinearGradient
            style={styles.gradient}
            {...getXYPosition(direction)}
            colors={getGradientColors(color)}
          />
        </Animated.View>
      </View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
  },
});
