import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Loader, Skeleton } from "react-native-masked-skeleton";

export default function App() {
  return (
    <View style={styles.container}>
      <Loader
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
              <Skeleton
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  marginBottom: 10,
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
                <Skeleton
                  style={{
                    height: 10,
                    width: 250,
                    marginBottom: 10,
                  }}
                />
              </View>
            </View>

            <Skeleton
              style={{
                height: 200,
                width: "100%",
                marginBottom: 20,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                flexDirection: "row",
              }}
            >
              <Skeleton
                style={{
                  height: 50,
                  width: "85%",
                  borderRadius: 10,
                }}
              />
              <Skeleton
                style={{
                  height: 50,
                  width: "10%",
                  marginLeft: 20,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fefefe",
  },
});
