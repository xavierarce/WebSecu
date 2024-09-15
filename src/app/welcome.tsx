import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { useTranslation } from "react-i18next";
import Button from "../components/Button/Button";
import { useRouter } from "expo-router";

const tradKey = "welcome-page";

const Welcome = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require("../../assets/images/GYM TRACKER.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>{t(`${tradKey}.title`)}</Text>
          <Text style={styles.punchline}>{t(`${tradKey}.punchline`)}</Text>
        </View>
        <View style={styles.footer}>
          <Button title={t("welcome-page.get_started")} onPress={() => {}} />
        </View>
        <View style={styles.buttomTextContiner}>
          <Text style={styles.loginText}>
            {t(`${tradKey}.already_have_account`)}
          </Text>
          <Pressable onPress={() => router.push("login" as any)}>
            <Text style={[styles.loginText, { color: theme.colors.secondary }]}>
              {t(`${tradKey}.login`)}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(40),
    width: "100%",
    alignSelf: "center",
  },
  title: {
    color: theme.colors.textLight,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    fontSize: 20,
    textAlign: "center",
    color: theme.colors.textLight,
  },
  footer: {
    gap: 20,
    width: "100%",
  },
  buttomTextContiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    color: theme.colors.textLight,
    fontSize: 16,
    textAlign: "center",
    fontWeight: theme.fonts.bold,
  },
});

export default Welcome;
