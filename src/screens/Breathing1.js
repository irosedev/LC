import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import HeaderX from "../components/HeaderX";

function Breathing1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse4Stack}>
        <Svg viewBox="0 0 323.94 328.95" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(56,23,42,1)"
            cx={162}
            cy={164}
            rx={162}
            ry={164}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 248.07 252.05" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(117,75,85,1)"
            cx={124}
            cy={126}
            rx={124}
            ry={126}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 175.61 181.14" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(150,57,78,1)"
            cx={88}
            cy={91}
            rx={88}
            ry={91}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 115.94 117.91" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(198,117,133,1)"
            cx={58}
            cy={59}
            rx={58}
            ry={59}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 69.9 72.63" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={35}
            cy={36}
            rx={35}
            ry={36}
          ></Ellipse>
        </Svg>
      </View>
      <HeaderX style={styles.headerX}></HeaderX>
      <Text style={styles.breatheOut}>Breathe out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 324,
    height: 329,
    position: "absolute"
  },
  ellipse: {
    top: 38,
    left: 37,
    width: 248,
    height: 252,
    position: "absolute"
  },
  ellipse1: {
    top: 74,
    left: 74,
    width: 176,
    height: 181,
    position: "absolute"
  },
  ellipse2: {
    top: 105,
    left: 104,
    width: 116,
    height: 118,
    position: "absolute"
  },
  ellipse3: {
    top: 128,
    left: 127,
    width: 70,
    height: 73,
    position: "absolute"
  },
  ellipse4Stack: {
    width: 324,
    height: 329,
    marginTop: 208,
    marginLeft: 26
  },
  headerX: {
    width: 375,
    height: 91,
    marginTop: -537,
    alignSelf: "center"
  },
  breatheOut: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 471,
    marginLeft: 140
  }
});

export default Breathing1;
