import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="av-timer"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.btn1Caption,
            {
              color: props.active ? "#007AFF" : "#9E9E9E"
            }
          ]}
        >
          Dashboard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="poll"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.points}>Points</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon
          name="ios-heart-empty"
          style={styles.icon4}
        ></IoniconsIcon>
        <Text style={styles.settings}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  btn1Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  points: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  settings: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  }
});

export default CupertinoFooter2;
