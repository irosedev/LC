import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderX from "../components/HeaderX";
import CupertinoFooter2 from "../components/CupertinoFooter2";

function Sleep(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum1}>8h30</Text>
      <View style={styles.rect8Stack}>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
        <View style={styles.rect10}></View>
        <View style={styles.rect11}></View>
        <View style={styles.rect12}></View>
        <View style={styles.rect13}></View>
        <View style={styles.rect14}></View>
      </View>
      <HeaderX style={styles.headerX}></HeaderX>
      <View style={styles.rect1StackStack}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}></View>
          <View style={styles.rect4}></View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect7}></View>
        </View>
      </View>
      <View style={styles.s3Row}>
        <Text style={styles.s3}>S</Text>
        <Text style={styles.m2}>M</Text>
        <Text style={styles.t3}>T</Text>
        <Text style={styles.w1}>W</Text>
        <Text style={styles.t2}>T</Text>
        <Text style={styles.f1}>F</Text>
        <Text style={styles.s2}>S</Text>
      </View>
      <View style={styles.rect6}></View>
      <CupertinoFooter2 style={styles.cupertinoFooter1}></CupertinoFooter2>
      <Text style={styles.today1}>today.</Text>
      <Text style={styles.youveSleptFor}>You&#39;ve slept for</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum1: {
    fontFamily: "roboto-900",
    color: "rgba(239,156,184,1)",
    fontSize: 130,
    marginTop: 194,
    marginLeft: 43
  },
  rect8: {
    top: 0,
    left: 168,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect9: {
    top: 0,
    left: 134,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect10: {
    top: 0,
    left: 102,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect11: {
    top: 0,
    left: 68,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect12: {
    top: 0,
    left: 34,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect13: {
    top: 0,
    left: 0,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect14: {
    top: 0,
    left: 199,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(243,205,237,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect8Stack: {
    width: 376,
    height: 17,
    marginTop: 158,
    marginLeft: 2
  },
  headerX: {
    width: 375,
    height: 91,
    marginTop: -526,
    alignSelf: "center"
  },
  rect1: {
    top: 0,
    left: 89,
    width: 176,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect4: {
    top: 8,
    left: 0,
    width: 162,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect1Stack: {
    top: 0,
    left: 82,
    width: 265,
    height: 25,
    position: "absolute"
  },
  rect2: {
    top: 14,
    left: 176,
    width: 104,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect3: {
    top: 0,
    left: 128,
    width: 133,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect5: {
    top: 0,
    left: 62,
    width: 133,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect7: {
    top: 6,
    left: 0,
    width: 122,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect2Stack: {
    top: 22,
    left: 0,
    width: 280,
    height: 31,
    position: "absolute"
  },
  rect1StackStack: {
    width: 347,
    height: 53,
    marginTop: 462,
    marginLeft: 30
  },
  s3: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  m2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 25
  },
  t3: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 22
  },
  w1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 26
  },
  t2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 21
  },
  f1: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 26
  },
  s2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 22
  },
  s3Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 86,
    marginRight: 81
  },
  rect6: {
    width: 44,
    height: 17,
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ],
    marginTop: -53,
    marginLeft: 102
  },
  cupertinoFooter1: {
    height: 47,
    width: 341,
    marginTop: 94,
    marginLeft: 18
  },
  today1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: -409,
    marginLeft: 294
  },
  youveSleptFor: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: -234,
    marginLeft: 29
  }
});

export default Sleep;
