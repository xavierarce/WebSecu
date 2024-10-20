import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton/BackButton";
import { router } from "expo-router";
import { hp, wp } from "../helpers/common";
import { useTranslation } from "react-i18next";
import Input from "../components/Input/Input";
import Icon from "@/assets/icons";
import Button from "../components/Button/Button";
import { supabase } from "../lib/supabase";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert(t("login-page.hey"), t("login-page.errors.missing_fields"));
      return;
    }

    const localEmail = email.trim();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: localEmail,
        password: password,
      });

      if (error) Alert.alert("Login", error.message);
    } catch (error) {
      Alert.alert("Login", `${(error as Error).message} - 500`);
    }

    setIsLoading(false);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton />

        <View>
          <Text style={styles.welcomeText}>{t("login-page.hey")}</Text>
          <Text style={styles.welcomeText}>{t("login-page.welcome")}</Text>
        </View>

        <View style={styles.form}>
          <Text>{t("login-page.please_login")}</Text>
          <Input
            icon={
              <Icon name="mail" size={26} strokeWidth={1.6} color="black" />
            }
            placeholder={t("login-page.form.email")}
            onChangeText={(e) => setEmail(e)}
          />
          <Input
            icon={
              <Icon name="lock" size={26} strokeWidth={1.6} color="black" />
            }
            secureTextEntry
            placeholder={t("login-page.form.password")}
            onChangeText={(e) => setPassword(e)}
          />
          <Text style={styles.forgotPassword}>
            {t("login-page.form.forgot_password")}
          </Text>
          <Button
            title={t("login-page.form.login")}
            loading={isLoading}
            onPress={onSubmit}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {t("login-page.footer.dont_have_account")}
          </Text>
          <Pressable
            onPress={() => {
              router.push("signup" as any);
            }}
          >
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              {t("login-page.footer.sign_up")}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    color: theme.colors.text,
    textAlign: "center",
    fontSize: hp(1.6),
  },
});
