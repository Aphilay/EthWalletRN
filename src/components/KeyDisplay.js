// KeyDisplay is a child component which displays a header title and text with border
// props are passed down from its parent component, HomeScreen
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const KeyDisplay = (props) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{props.label}</Text>
      <Text style={styles.keyStyle}>{props.generatedKey}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  keyStyle: {
    fontSize: 20,
    margin: 5,
    marginRight: 20,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default KeyDisplay;
