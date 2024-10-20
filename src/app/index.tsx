import { View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import "../services/i18next";
import Loading from "../components/Loading/Loading";

const Index = () => {
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
