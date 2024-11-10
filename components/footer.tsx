import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface FooterProps {
  titleFooter: string;
  signFooter: string;
  route: string;
}

const Footer: React.FC<FooterProps> = ({ titleFooter, signFooter, route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerContent}>{titleFooter}</Text>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate(route as never)}
          style={styles.footerText}
        >
          {signFooter}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 20,
    top: 270,
  },
  footerContent: {
    color: "white",
  },
  footerText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "900",
  },
});

export default Footer;
