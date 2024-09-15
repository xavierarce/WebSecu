import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeIcon from "../../assets/icons/Home";
import { theme } from "../constants/theme";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t("welcome-page.login")}</Text>
      <Text>{t("welcome-page.sign_up")}</Text>
      <HomeIcon strokeWidth={2} color={theme.colors.rose} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
