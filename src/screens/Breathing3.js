import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";

function Breathing3(props) {
  return (
    <View style={styles.container}>
      <HeaderX style={styles.headerX}></HeaderX>
      <View style={styles.ellipse1Stack}>
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
      <Text style={styles.breatheIn}>Breathe in...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerX: {
    width: 375,
    height: 91,
    alignSelf: "center"
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 176,
    height: 181,
    position: "absolute"
  },
  ellipse2: {
    top: 31,
    left: 30,
    width: 116,
    height: 118,
    position: "absolute"
  },
  ellipse3: {
    top: 54,
    left: 53,
    width: 70,
    height: 73,
    position: "absolute"
  },
  ellipse1Stack: {
    width: 176,
    height: 181,
    marginTop: 191,
    marginLeft: 100
  },
  breatheIn: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 99,
    marginLeft: 140
  }
});

export default Breathing3;
