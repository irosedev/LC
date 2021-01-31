import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithFourTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapper1}>
          <Text style={styles.text1}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <Text style={styles.text2}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}>
          <Text style={styles.text3}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper4}>
          <Text style={styles.text4}>Year</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row"
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  text1: {
    fontSize: 13,
    color: "#FFFFFF"
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderLeftWidth: 0
  },
  text2: {
    fontSize: 13,
    color: "#007AFF"
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text3: {
    fontSize: 13,
    color: "#007AFF"
  },
  segmentTextWrapper4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  text4: {
    fontSize: 13,
    color: "#007AFF"
  }
});

export default CupertinoSegmentWithFourTabs;
