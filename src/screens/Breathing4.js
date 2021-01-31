import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";

function Breathing4(props) {
  return (
    <View style={styles.container}>
      <HeaderX style={styles.headerX}></HeaderX>
      <View style={styles.ellipse2Stack}>
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
      <Text style={styles.breatheOut}>Breathe out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerX: {
    width: 375,
    height: 91
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 116,
    height: 118,
    position: "absolute"
  },
  ellipse3: {
    top: 23,
    left: 23,
    width: 70,
    height: 73,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 116,
    height: 118,
    marginTop: 222,
    marginLeft: 130
  },
  breatheOut: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 131,
    marginLeft: 140
  }
});

export default Breathing4;
