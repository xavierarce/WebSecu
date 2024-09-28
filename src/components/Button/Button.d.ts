import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
  loading?: boolean;
  hasShadow?: boolean;
}
