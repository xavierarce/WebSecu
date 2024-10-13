import { StyleSheet, Text, View } from "react-native";
import React from "react";

const getSourceService = (imagePath) => {
  if (imagePath) {
    return { uri: imagePath };
  } else {
    return require("@/assets/images/defaultUser.png");
  }
};

export default getSourceService;

const styles = StyleSheet.create({});
