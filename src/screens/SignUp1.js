import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function SignUp1(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../assets/images/Gradient_iHgzu7i.png")}
        >
          <View style={styles.progressBarColumn}>
            <View style={styles.progressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
            <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
            <View style={styles.form}>
              <View style={styles.button2Stack}>
                <TouchableOpacity style={styles.button2}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon5}
                  ></EvilIconsIcon>
                </TouchableOpacity>
                <Text style={styles.janeDoe}>Jane Doe</Text>
              </View>
              <View style={styles.button3Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignUp2")}
                  style={styles.button3}
                >
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon6}
                  ></EvilIconsIcon>
                </TouchableOpacity>
                <Text style={styles.email2}>Email</Text>
              </View>
              <View style={styles.passwordStack}>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon7}
                  ></EvilIconsIcon>
                </View>
                <Text style={styles.password2}>Password</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressBarColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Timeline")}
              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
        </ImageBackground>
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
    flex: 1
  },
  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 8,
    marginTop: 16
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 8,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginLeft: 3,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  createAccount: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    width: 250,
    height: 32,
    textAlign: "center",
    marginTop: 128,
    marginLeft: 22
  },
  form: {
    height: 230,
    marginTop: 71
  },
  button2: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5,
    justifyContent: "center"
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 16
  },
  janeDoe: {
    top: 23,
    left: 57,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button2Stack: {
    height: 59
  },
  button3: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    borderRadius: 5,
    width: 293,
    left: 0,
    top: 0,
    justifyContent: "center"
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15
  },
  email2: {
    top: 21,
    left: 57,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  button3Stack: {
    width: 293,
    height: 59,
    marginTop: 26
  },
  password: {
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 5
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    marginTop: 13,
    marginLeft: 15
  },
  password2: {
    top: 24,
    left: 53,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  passwordStack: {
    height: 59,
    marginTop: 27
  },
  progressBarColumn: {
    marginTop: 58,
    marginLeft: 41,
    marginRight: 41
  },
  progressBarColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 55
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    marginLeft: 84
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

export default SignUp1;
