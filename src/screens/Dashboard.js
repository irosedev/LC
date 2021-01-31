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
import HeaderX from "../components/HeaderX";
import CupertinoFooter2 from "../components/CupertinoFooter2";

function Dashboard(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.iconRow}>
        <Icon name="home" style={styles.icon}></Icon>
        <View style={styles.image3Stack}>
          <ImageBackground
            source={require("../assets/images/sleep-removebg-preview1.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <Image
              source={require("../assets/images/mindful-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/eb3f3dd5-0aa8-43ad-912c-d1066180d619.sketchpad_23.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/veg-removebg-preview1.png")}
            resizeMode="contain"
            style={styles.image4}
            imageStyle={styles.image4_imageStyle}
          >
            <View style={styles.rect9}></View>
          </ImageBackground>
          <Image
            source={require("../assets/images/Untitled_design__1_-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("../assets/images/Untitled_design-removebg-preview1.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <View style={styles.rect}>
            <View style={styles.rect8}></View>
          </View>
          <View style={styles.rect6}></View>
          <View style={styles.rect5}>
            <View style={styles.rect12}></View>
          </View>
          <HeaderX button="Settings" style={styles.headerX}></HeaderX>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}>
            <View style={styles.rect11}></View>
          </View>
          <Text style={styles.text}>Dashboard</Text>
          <View style={styles.rect10}></View>
        </View>
      </View>
      <CupertinoFooter2 style={styles.cupertinoFooter2}></CupertinoFooter2>
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
    marginTop: 406
  },
  image3: {
    top: 200,
    left: 18,
    width: 160,
    height: 327,
    position: "absolute"
  },
  image3_imageStyle: {},
  image2: {
    width: 106,
    height: 116,
    marginTop: 17,
    marginLeft: 26
  },
  image6: {
    width: 136,
    height: 162,
    transform: [
      {
        rotate: "-4.00deg"
      }
    ],
    marginTop: 27,
    marginLeft: 10
  },
  image4: {
    top: 67,
    left: 0,
    width: 312,
    height: 252,
    position: "absolute"
  },
  image4_imageStyle: {},
  rect9: {
    width: 71,
    height: 44,
    backgroundColor: "rgba(183,179,183,1)",
    marginTop: 192,
    marginLeft: 124
  },
  image: {
    top: 498,
    left: 44,
    width: 105,
    height: 153,
    position: "absolute"
  },
  image5: {
    top: 441,
    left: 45,
    width: 117,
    height: 124,
    position: "absolute"
  },
  rect: {
    top: 183,
    left: 126,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect8: {
    width: 153,
    height: 44,
    backgroundColor: "rgba(183,179,183,1)"
  },
  rect6: {
    top: 552,
    left: 126,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect5: {
    top: 478,
    left: 125,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect12: {
    width: 117,
    height: 44,
    backgroundColor: "rgba(183,179,183,1)",
    marginLeft: 1
  },
  headerX: {
    top: 0,
    height: 93,
    position: "absolute",
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 375,
    left: 54
  },
  rect2: {
    top: 259,
    left: 125,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect3: {
    top: 333,
    left: 125,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect4: {
    top: 405,
    left: 125,
    width: 275,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)"
  },
  rect11: {
    width: 49,
    height: 44,
    backgroundColor: "rgba(183,179,183,1)"
  },
  text: {
    top: 108,
    left: 171,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(94,49,49,1)",
    fontSize: 30
  },
  rect10: {
    top: 333,
    left: 124,
    width: 208,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(183,179,183,1)"
  },
  image3Stack: {
    width: 429,
    height: 651,
    marginLeft: 910
  },
  iconRow: {
    height: 651,
    flexDirection: "row",
    marginLeft: -1004
  },
  cupertinoFooter2: {
    height: 47,
    width: 341,
    marginTop: 79,
    marginLeft: 18
  }
});

export default Dashboard;
