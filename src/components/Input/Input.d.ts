import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export interface InputProps {
  icon?: React.ReactNode; // The icon can be any React node (component)
  containerStyles?: StyleProp<ViewStyle>; // Custom styles for the container
  inputRef?: React.RefObject<TextInput>; // Ref for the TextInput component
  placeholder?: string; // Optional placeholder
  onChangeText?: (text: string) => void; // Optional function to handle text changes
  [key: string]: any; // To handle additional props dynamically
}
