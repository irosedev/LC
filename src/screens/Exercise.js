import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderX from "../components/HeaderX";
import CupertinoFooter2 from "../components/CupertinoFooter2";

function Exercise(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect14StackStack}>
        <View style={styles.rect14Stack}>
          <View style={styles.rect14}></View>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect6}></View>
        </View>
        <View style={styles.rect1}></View>
      </View>
      <HeaderX style={styles.headerX}></HeaderX>
      <Text style={styles.youveExercisedFor}>You&#39;ve exercised for</Text>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>50</Text>
        <Text style={styles.mins}>mins</Text>
      </View>
      <Text style={styles.today2}>today.</Text>
      <View style={styles.rect7StackStack}>
        <View style={styles.rect7Stack}>
          <View style={styles.rect7}></View>
          <View style={styles.rect10}></View>
        </View>
        <View style={styles.rect8Stack}>
          <View style={styles.rect8}></View>
          <View style={styles.rect11}></View>
          <View style={styles.rect12}></View>
          <View style={styles.rect13}></View>
        </View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.s2Row}>
        <Text style={styles.s2}>S</Text>
        <Text style={styles.m2}>M</Text>
        <Text style={styles.t13}>T</Text>
        <Text style={styles.w}>W</Text>
        <Text style={styles.t14}>T</Text>
        <Text style={styles.f}>F</Text>
        <Text style={styles.s3}>S</Text>
      </View>
      <CupertinoFooter2 style={styles.cupertinoFooter1}></CupertinoFooter2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect14: {
    top: 0,
    left: 165,
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
  rect2: {
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
  rect3: {
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
  rect4: {
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
  rect5: {
    top: 0,
    left: 100,
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
  rect6: {
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
  rect14Stack: {
    top: 0,
    left: 34,
    width: 342,
    height: 17,
    position: "absolute"
  },
  rect1: {
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
  rect14StackStack: {
    width: 376,
    height: 17,
    marginTop: 509,
    marginLeft: 2
  },
  headerX: {
    width: 375,
    height: 91,
    marginTop: -526,
    alignSelf: "center"
  },
  youveExercisedFor: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 67,
    marginLeft: 29
  },
  loremIpsum: {
    fontFamily: "roboto-900",
    color: "rgba(201,110,141,1)",
    fontSize: 150
  },
  mins: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 128
  },
  loremIpsumRow: {
    height: 181,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 97,
    marginRight: 74
  },
  today2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 294
  },
  rect7: {
    top: 14,
    left: 0,
    width: 177,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect10: {
    top: 0,
    left: 88,
    width: 205,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect7Stack: {
    top: 0,
    left: 0,
    width: 293,
    height: 31,
    position: "absolute"
  },
  rect8: {
    top: 9,
    left: 0,
    width: 126,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect11: {
    top: 15,
    left: 106,
    width: 116,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect12: {
    top: 6,
    left: 131,
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
  rect13: {
    top: 0,
    left: 156,
    width: 144,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect8Stack: {
    top: 30,
    left: 59,
    width: 300,
    height: 32,
    position: "absolute"
  },
  rect9: {
    top: 58,
    left: 112,
    width: 88,
    height: 17,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  rect7StackStack: {
    width: 359,
    height: 75,
    marginTop: 147,
    marginLeft: 2
  },
  s2: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  m2: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 25
  },
  t13: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 22
  },
  w: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 26
  },
  t14: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 21
  },
  f: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 26
  },
  s3: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 22
  },
  s2Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 86,
    marginRight: 81
  },
  cupertinoFooter1: {
    height: 47,
    width: 341,
    marginTop: 58,
    marginLeft: 18
  }
});

export default Exercise;
