# react-native-masked-skeleton

This library exposes a cross-platform interface for Skeleton Loader.

Under the hood, this library is using [`@react-native-masked-view/masked-view`](https://github.com/react-native-masked-view/masked-view), 
[`expo-linear-gradient`](https://www.npmjs.com/package/expo-linear-gradient) and [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated).

## Example
<img src="./.github/images/example.gif" />

## Setup
```bash
# using npm
$ npm i react-native-masked-skeleton

# using yarn
$ yarn add react-native-masked-skeleton
```

## Usage
```javascript
import React from "react";
import { View } from "react-native";
import { Loader, Skeleton } from "react-native-masked-skeleton";

const Placeholder = () => {
  return (
    <Loader
      duration={3000}
      direction="leftToRight"
      colors={["#d3d3d3", "#3e3e3e"]}
      maskElement={
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Skeleton
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          <View>
            <Skeleton
              style={{
                height: 10,
                width: 100,
                marginBottom: 10,
              }}
            />
            <Skeleton
              style={{
                height: 10,
                width: 200,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
      }
    />
  );
};

```

## Loader props
| Name            | Type       | Default          | Required  | Description           | Supported Values |
| --------------- | ---------- | ---------------- | --------  | --------------------  |      -           |
| `maskElement`   | number     |     -            | required  | Animation Duration    |      -           |
| `colors`        | string[]   |     -            | required  | Gradient Color        |      -           |
| `delay`         | number     | `500`            | optional  | Animation Delay       |      -           |
| `duration`      | number     | `2000`           | optional  | Animation Duration    |      -           |
| `direction`     | string     | `leftToRight`    | optional  | Animation Direction   | `leftToRight` `rightToLeft` `topToBottom` `bottomToTop` |

## Skeleton props
Skeleton Supports all React Native [View](https://reactnative.dev/docs/view) Props
