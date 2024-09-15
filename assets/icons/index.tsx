import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "./index.d";
import { theme } from "@/src/constants/theme";

// Define the type for the props
export interface IconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  [key: string]: any; // This allows any additional props to be passed
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  console.log(name, "name");

  const IconComponent = icons[name];

  console.log(IconComponent, "IconComponent");

  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({});
