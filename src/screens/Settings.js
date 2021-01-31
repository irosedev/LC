import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import HeaderX from "../components/HeaderX";

function Settings(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.deleteApp}>DELETE APP</Text>
      </TouchableOpacity>
      <Text style={styles.text}>SETTINGS</Text>
      <View style={styles.rect}>
        <Text style={styles.sccountInformation}>Account information</Text>
      </View>
      <View style={styles.accountInformationStack}>
        <Text style={styles.accountInformation}>Account information</Text>
        <View style={styles.rect2}>
          <Text style={styles.reportABug}>Report a bug</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 375
  },
  button: {
    width: 287,
    height: 54,
    backgroundColor: "rgba(211,83,162,1)",
    marginTop: 581,
    marginLeft: 44
  },
  deleteApp: {
    fontFamily: "alef-700",
    color: "#121212",
    fontSize: 30,
    marginTop: 6,
    marginLeft: 64
  },
  text: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: -621,
    marginLeft: 129
  },
  rect: {
    width: 287,
    height: 54,
    backgroundColor: "#E6E6E6",
    marginTop: 83,
    marginLeft: 44
  },
  sccountInformation: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 17,
    marginLeft: 64
  },
  accountInformation: {
    top: 17,
    left: 64,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17
  },
  rect2: {
    top: 0,
    left: 0,
    width: 287,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  reportABug: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 16,
    marginLeft: 85
  },
  accountInformationStack: {
    width: 287,
    height: 54,
    marginTop: 38,
    marginLeft: 44
  }
});

export default Settings;
