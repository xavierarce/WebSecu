import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import { useTranslation } from "react-i18next";
import "../../services/i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <Text>{t("title")}</Text>
      <Button
        title={t("go_to_welcome")}
        onPress={() => router.push("welcome" as any)}
      />
    </ScreenWrapper>
  );
};

export default Index;
