import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import MainText from "../../components/mainText";
import InputMobile from "../../components/ınput";
import Cbutton from "../../components/button";
import Footer from "../../components/footer";
import Checkbox from "expo-checkbox";

const LoginScreen: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MainText content="Welcome Back" sentence="Login to your account" />
        <InputMobile mobileIcon="user" textMobile="Username" />
        <InputMobile mobileIcon="key" textMobile="Password" />
        <View style={styles.sectionHead}>
          <View style={styles.sectionLeft}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={"#000"}
            />
            <Text style={styles.paragraph}>Remember me</Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.textSectionRight}>Forgot Password?</Text>
          </View>
        </View>
        <Cbutton text="Login" />
        <Footer
          titleFooter="Don't have an account?"
          signFooter="Sign up"
          route="signup"
        />

        <Image style={styles.image} source={require("../../assets/main.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e9dada",
    position: "relative",
    padding: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: -450,
    zIndex: 2,
  },
  textInputHead: {
    flexDirection: "row",
  },
  sectionHead: {
    flexDirection: "row",
    gap: 80,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  sectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    top: 300,
    paddingEnd: 2,
  },
  sectionRight: {
    zIndex: 20,
    top: 300,
  },
  paragraph: {
    fontSize: 15,
    color: "#fff",
    paddingEnd: 10,
  },
  checkbox: {
    margin: 8,
    color: "#000",
    backgroundColor: "#fff",
  },
  textSectionRight: {
    color: "#fff",
    fontWeight: "900",
  },
});

export default LoginScreen;
