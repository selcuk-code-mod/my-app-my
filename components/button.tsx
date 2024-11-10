import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Cbutton = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity style={styles.buttonHead}>
      <Text style={styles.logınText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Cbutton;

const styles = StyleSheet.create({
  buttonHead: {
    borderWidth: 1,
    borderColor: "#d47923",
    top: 220,
    zIndex: 20,
    backgroundColor: "#d47923",
    padding: 10,
    cursor: "pointer",
    width: "85%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logınText: {
    color: "#931f1f",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
