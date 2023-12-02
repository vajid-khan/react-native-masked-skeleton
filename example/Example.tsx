import { View, StyleSheet } from "react-native";
import { MaskedSkeleton } from "../src/MaskedSkeleton";

export const Example = () => {
  return (
    <View style={styles.container}>
      <MaskedSkeleton
        duration={3000}
        direction="leftToRight"
        colors={["#d3d3d3", "#3e3e3e"]}
        maskElement={
          <View
            style={{
              margin: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  marginBottom: 10,
                  marginRight: 20,
                  backgroundColor: "cyan",
                }}
              />
              <View>
                <View
                  style={{
                    height: 10,
                    width: 100,
                    marginBottom: 10,
                    backgroundColor: "cyan",
                  }}
                />
                <View
                  style={{
                    height: 10,
                    width: 200,
                    marginBottom: 10,
                    backgroundColor: "cyan",
                  }}
                />
                <View
                  style={{
                    height: 10,
                    width: 250,
                    marginBottom: 10,
                    backgroundColor: "cyan",
                  }}
                />
              </View>
            </View>

            <View
              style={{
                height: 200,
                width: "100%",
                marginBottom: 20,
                borderRadius: 10,
                backgroundColor: "cyan",
              }}
            />
            <View
              style={{
                marginBottom: 20,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 50,
                  width: "85%",
                  borderRadius: 10,
                  backgroundColor: "cyan",
                }}
              />
              <View
                style={{
                  height: 50,
                  width: "10%",
                  marginLeft: 20,
                  borderRadius: 10,
                  backgroundColor: "cyan",
                }}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fefefe",
  },
});
