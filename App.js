import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookUIHMRRoot from "./storybook";

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>A lot faster?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StorybookUIHMRRoot;
