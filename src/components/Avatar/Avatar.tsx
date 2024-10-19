import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "@/src/helpers/common";
import { theme } from "@/src/constants/theme";
import { Image } from "expo-image";
import getSourceService from "@/src/services/imageSourceService";

type AvatarProps = {
  uri: string;
  size?: number;
  rounded?: number;
  style?: object;
};

const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = hp(4.5),
  rounded = theme.radius.md,
  style,
}) => {
  return (
    <Image
      source={getSourceService(uri)}
      transition={100}
      style={[
        styles.avatar,
        { height: size, width: size, borderRadius: rounded },
        style,
      ]}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderCurve: "continuous",
    borderColor: theme.colors.text,
    borderWidth: 1,
  },
});
