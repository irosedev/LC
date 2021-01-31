import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function LogoHeader(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Image
        source={require("../assets/images/lc-removebg-preview.png")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: 116,
    height: 136,
    marginTop: -43,
    marginLeft: -36
  }
});

export default LogoHeader;
