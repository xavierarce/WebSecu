import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import { useTranslation } from "react-i18next";
import "../services/i18next";
import Loading from "../components/Loading/Loading";

const Index = () => {
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </View>
    </ScreenWrapper>
  );
};

export default Index;
