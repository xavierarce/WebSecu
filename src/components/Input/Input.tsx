import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { theme } from "@/src/constants/theme";
import { hp } from "@/src/helpers/common";
import { InputProps } from "./Input.d";

const Input: React.FC<InputProps> = (props) => {
  return (
    <View style={[styles.container, props.containerStyle || {}]}>
      {props.icon && props.icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={"gray"}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.textLight,
    paddingVertical: 10,
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
