import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  mobileIcon: keyof typeof FontAwesome.glyphMap;
  textMobile: string;
};

const InputMobile: React.FC<Props> = ({ mobileIcon, textMobile }) => {
  return (
    <View>
      <View style={styles.containerIcon}>
        <FontAwesome
          name={mobileIcon}
          size={20}
          color="#931f1f"
          style={styles.icon}
        />
        <TextInput
          placeholderTextColor={"#931f1f"}
          placeholder={textMobile}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9dada",
    width: "90%",
    borderRadius: 8,
    padding: 10,
    top: 200,
    zIndex: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default InputMobile;
