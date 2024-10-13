import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";

// Define the function type for getSourceService
const getSourceService = (imagePath: string | null): ImageSourcePropType => {
  if (imagePath) {
    return { uri: imagePath };
  } else {
    return require("@/assets/images/defaultUser.png");
  }
};

export default getSourceService;
