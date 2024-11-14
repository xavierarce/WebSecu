import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton/BackButton";
import { router } from "expo-router";
import { hp, wp } from "../helpers/common";
import { useTranslation } from "react-i18next";
import Input from "../components/Input/Input";
import Icon from "@/assets/icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../components/Button/Button";
import { supabase } from "../lib/supabase";
import { useAuthContext } from "../context/AuthContext";

const SingUp = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const [name, setName] = useState({
    first_name: "",
    last_name: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) router.replace("/main/home");
  }, [user]);

  const onSubmit = async () => {
    if (!email || !password || !name.first_name || !name.last_name) {
      Alert.alert(
        t("sign-up-page.hey"),
        t("sign-up-page.errors.missing_fields")
      );
      return;
    }

    const local_first_name = name.first_name.trim();
    const local_last_name = name.last_name.trim();
    const localEmail = email.trim();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: localEmail,
        password: password,
        options: {
          data: {
            first_name: local_first_name,
            last_name: local_last_name,
            email: localEmail,
          },
        },
      });

      if (error) Alert.alert("SingUp", error.message);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("SingUp", `${error.message} - 500`);
      setIsLoading(false);
    }
  };

  const setFirstName = (e) => {
    setName({ ...name, first_name: e });
  };
  const setLastName = (e) => {
    setName({ ...name, last_name: e });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScreenWrapper bg="white">
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton />

          <View>
            <Text style={styles.welcomeText}>{t("sign-up-page.hey")}</Text>
            <Text style={styles.welcomeText}>{t("sign-up-page.welcome")}</Text>
          </View>

          <View style={styles.form}>
            <Text>{t("sign-up-page.please_sign_up")}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Input
                icon={
                  <Icon name="user" size={26} strokeWidth={1.6} color="black" />
                }
                containerStyle={{ flex: 1, marginRight: 10 }}
                placeholder={t("sign-up-page.form.first_name")}
                onChangeText={(e) => setFirstName(e)}
              />
              <Input
                containerStyle={{ flex: 1 }}
                placeholder={t("sign-up-page.form.last_name")}
                onChangeText={(e) => setLastName(e)}
              />
            </View>
            <Input
              icon={
                <Icon name="mail" size={26} strokeWidth={1.6} color="black" />
              }
              placeholder={t("sign-up-page.form.email")}
              onChangeText={(e) => setEmail(e)}
            />
            <Input
              icon={
                <Icon name="lock" size={26} strokeWidth={1.6} color="black" />
              }
              secureTextEntry
              placeholder={t("sign-up-page.form.password")}
              onChangeText={(e) => setPassword(e)}
            />
            <Button
              title={t("sign-up-page.form.sign_up")}
              loading={isLoading}
              onPress={onSubmit}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {t("sign-up-page.footer.already_have_account")}
            </Text>
            <Pressable onPress={() => router.replace("/login")}>
              <Text
                style={[
                  styles.footerText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                {t("sign-up-page.footer.login")}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScreenWrapper>
    </GestureHandlerRootView>
  );
};

export default SingUp;

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
