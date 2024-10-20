import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg = "transparent" }) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = top > 0 ? top + 5 : 20;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>
        {children}
      </View>
    </GestureHandlerRootView>
  );
};

export default ScreenWrapper;

ScreenWrapper.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
};

ScreenWrapper.defaultProps = {
  children: null,
  bg: "transparent",
};
