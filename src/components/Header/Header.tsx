import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import BackButton from "../BackButton/BackButton";
import { hp } from "@/src/helpers/common";
import { theme } from "@/src/constants/theme";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  mb?: number;
}

const Header: React.FC<HeaderProps> = ({
  title = "",
  showBackButton = true,
  mb = 10,
}) => {
  return (
    <View style={[styles.container, { marginBottom: mb }]}>
      {showBackButton && (
        <View style={styles.backButton}>
          <BackButton />
        </View>
      )}
      <Text style={styles.title}>{title || ""}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    gap: 10,
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.textDark,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
});
