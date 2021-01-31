import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Login(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.backgroundStack}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_Mx4qz9s.png")}
          >
            <View style={styles.laissezCareColumn}>
              <Text style={styles.laissezCare}></Text>
              <View style={styles.form}>
                <View style={styles.usernameColumn}>
                  <View style={styles.username}>
                    <EvilIconsIcon
                      name="user"
                      style={styles.icon22}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.usernameInput}
                    ></TextInput>
                  </View>
                  <View style={styles.password}>
                    <EvilIconsIcon
                      name="lock"
                      style={styles.icon2}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.passwordInput}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.usernameColumnFiller}></View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Channels")}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.laissezCareColumnFiller}></View>
            <View style={styles.footerTexts}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignUp")}
                style={styles.button2}
              >
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.button2Filler}></View>
              <Text style={styles.needHelp}>Need Help?</Text>
            </View>
          </ImageBackground>
        </View>
        <Image
          source={require("../assets/images/HackViolet-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(230,154,214,1)"
  },
  background: {
    top: 0,
    left: 12,
    position: "absolute",
    right: 12,
    bottom: 0
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  laissezCare: {
    fontFamily: "arial-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },
  form: {
    height: 230,
    marginTop: 66
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5
  },
  text2: {
    color: "rgba(255,255,255,1)",
    marginTop: 20,
    marginLeft: 110
  },
  laissezCareColumn: {
    marginTop: 263,
    marginLeft: 41,
    marginRight: 41
  },
  laissezCareColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 28,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  },
  image: {
    top: 0,
    left: 0,
    width: 399,
    height: 418,
    position: "absolute"
  },
  backgroundStack: {
    flex: 1,
    marginLeft: -12,
    marginRight: -12
  }
});

export default Login;
