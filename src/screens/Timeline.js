import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CupertinoSegmentWithFourTabs from "../components/CupertinoSegmentWithFourTabs";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import HeaderX from "../components/HeaderX";

function Timeline(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.iconRow}>
        <Icon name="home" style={styles.icon}></Icon>
        <View style={styles.rect7StackStack}>
          <View style={styles.rect7Stack}>
            <View style={styles.rect7}></View>
            <View style={styles.rect}></View>
            <ImageBackground
              source={require("../assets/images/veg-removebg-preview1.png")}
              resizeMode="contain"
              style={styles.image4}
              imageStyle={styles.image4_imageStyle}
            >
              <Text style={styles.dashboard}>DASHBOARD</Text>
            </ImageBackground>
            <View style={styles.rect2}></View>
            <View style={styles.rect3}></View>
            <CupertinoSegmentWithFourTabs
              style={styles.cupertinoSegmentWithFourTabs}
            ></CupertinoSegmentWithFourTabs>
            <Image
              source={require("../assets/images/Untitled_design__1_-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <ImageBackground
              source={require("../assets/images/sleep-removebg-preview1.png")}
              resizeMode="contain"
              style={styles.image3}
              imageStyle={styles.image3_imageStyle}
            >
              <Image
                source={require("../assets/images/Untitled_design-removebg-preview1.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
            </ImageBackground>
            <Image
              source={require("../assets/images/eb3f3dd5-0aa8-43ad-912c-d1066180d619.sketchpad_23.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}></View>
            <Image
              source={require("../assets/images/mindful-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
          <View style={styles.rect5}></View>
          <View style={styles.rect4}></View>
          <CupertinoFooter2 style={styles.cupertinoFooter2}></CupertinoFooter2>
        </View>
      </View>
      <HeaderX button="Settings" style={styles.headerX}></HeaderX>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 300
  },
  rect7: {
    top: 162,
    left: 130,
    width: 90,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(202,152,194,1)"
  },
  rect: {
    top: 162,
    left: 121,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  image4: {
    top: 0,
    left: 0,
    width: 420,
    height: 329,
    position: "absolute"
  },
  image4_imageStyle: {},
  dashboard: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 19,
    marginLeft: 196
  },
  rect2: {
    top: 231,
    left: 121,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect3: {
    top: 298,
    left: 120,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  cupertinoSegmentWithFourTabs: {
    height: 38,
    width: 349,
    position: "absolute",
    top: 58,
    backgroundColor: "rgba(251,251,251,1)",
    left: 100
  },
  image: {
    top: 151,
    left: 40,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image3: {
    top: 161,
    left: 16,
    width: 228,
    height: 336,
    position: "absolute"
  },
  image3_imageStyle: {},
  image5: {
    width: 162,
    height: 166,
    marginTop: 148,
    marginLeft: 32
  },
  image6: {
    top: 369,
    left: 30,
    width: 200,
    height: 200,
    position: "absolute",
    transform: [
      {
        rotate: "-4.00deg"
      }
    ]
  },
  rect7Stack: {
    top: 0,
    left: 0,
    width: 449,
    height: 569,
    position: "absolute"
  },
  rect6: {
    top: 61,
    left: 68,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  image2: {
    top: 0,
    left: 0,
    width: 152,
    height: 163,
    position: "absolute"
  },
  rect6Stack: {
    top: 435,
    left: 53,
    width: 376,
    height: 163,
    position: "absolute"
  },
  rect5: {
    top: 429,
    left: 120,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect4: {
    top: 363,
    left: 121,
    width: 308,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  cupertinoFooter2: {
    height: 47,
    width: 369,
    position: "absolute",
    left: 93,
    top: 592
  },
  rect7StackStack: {
    width: 462,
    height: 639,
    marginLeft: 877
  },
  iconRow: {
    height: 639,
    flexDirection: "row",
    marginTop: 106,
    marginLeft: -1004
  },
  headerX: {
    height: 93,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 375,
    marginTop: -745,
    alignSelf: "center"
  }
});

export default Timeline;
