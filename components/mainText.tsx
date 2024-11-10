import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MainText = ({
  content,
  sentence,
}: {
  content: string;
  sentence: string;
}) => {
  return (
    <View>
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.textTitle}>{sentence}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: -70,
    fontSize: 50,
    color: "#fff",
    position: "relative",
    top: 150,
    fontWeight: "bold",
    zIndex: 20,
    flexDirection: "row",
    textAlign: "center",
  },
  textTitle: {
    fontSize: 24,
    color: "#fff",
    zIndex: 20,
    top: 170,
    textAlign: "center",
    fontWeight: "800",
  },
});

export default MainText;
