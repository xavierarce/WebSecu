import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { ButtonProps } from "./Button.d";
import { theme } from "@/src/constants/theme";
import { hp, wp } from "@/src/helpers/common";
import Loading from "../Loading/Loading";

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  textStyle,
  title,
  onPress,
  loading = false,
  hasShadow = false,
}) => {
  const shadowStyle = {
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  };

  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]} // Combine styles correctly
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primaryDark,
    height: hp(4),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xxs,
  },
  text: {
    color: theme.colors.textLight,
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
});
