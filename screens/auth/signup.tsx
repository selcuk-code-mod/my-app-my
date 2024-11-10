import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import Cbutton from "../../components/button";
import MainText from "../../components/mainText";
import InputMobile from "../../components/ınput";
import Footer from "../../components/footer";
import Checkbox from "expo-checkbox";

const RegisterScreen: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MainText content="Register" sentence="Register to get started" />
        <InputMobile mobileIcon="user" textMobile="Username" />
        <InputMobile mobileIcon="envelope-o" textMobile="Email address" />
        <InputMobile mobileIcon="key" textMobile="Password" />
        <InputMobile mobileIcon="key" textMobile="Confirm password" />
        <View>
          <Text style={styles.paragraphBottom}>
            By registering, you are agreeing to out Terms of use and Privacy
            Policy.
          </Text>
        </View>
        <Cbutton text="Register" />
        <View>
          <Footer
            titleFooter="Already have an account?"
            signFooter="Login"
            route="login"
          />
        </View>

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
    marginTop: -700,
  },
  textInputHead: {
    flexDirection: "row",
  },
  sectionHead: {
    flexDirection: "row",
    gap: 80,
    justifyContent: "center",
    alignItems: "center",
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
  paragraphBottom: {
    fontSize: 15,
    color: "#fff",
    marginHorizontal: 40,
    zIndex: 20,
    top: 200,
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

export default RegisterScreen;
