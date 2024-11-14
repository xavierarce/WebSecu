import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import Header from "@/src/components/Header/Header";
import { hp, wp } from "@/src/helpers/common";
import { theme } from "@/src/constants/theme";
import { Image } from "expo-image";
import { useAuthContext } from "@/src/context/AuthContext";
import Icon from "@/assets/icons";
import Input from "@/src/components/Input/Input";
import { useTranslation } from "react-i18next";
import Button from "@/src/components/Button/Button";
import { updateUser } from "@/src/services/userService";
import { AddressInput } from "@/src/components/EditAddress/EditAddress";
import * as ImagePicker from "expo-image-picker";
import { getImageSource, uploadFile } from "@/src/services/imageService";
import { defaultAddress } from "@/src/services/formatFunctions";

const EditProfile = () => {
  const { t } = useTranslation();
  const { user, setUserData } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [formUser, setFormUser] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    image: null,
    address: user?.address || defaultAddress,
    bio: user?.bio || "",
  });

  const imageSource =
    formUser?.image && typeof formUser.image === "object"
      ? formUser.image.uri
      : getImageSource(user?.image);

  useEffect(() => {
    if (user) setFormUser(user);
  }, [user]);

  const setInputForm = (key, value) => {
    setFormUser((prev) => ({ ...prev, [key]: value }));
  };

  const setAddressInput = (key, value) => {
    setFormUser((prev) => ({
      ...prev,
      address: { ...prev.address, [key]: value },
    }));
  };
  const onSubmit = async () => {
    const userData = { ...formUser };
    setLoading(true);

    const requiredFields = {
      first_name: t("edit-profile.form.first_name"),
      last_name: t("edit-profile.form.last_name"),
      email: t("edit-profile.form.email"),
    };

    if (userData.image && typeof userData.image === "object") {
      const res = await uploadFile("profile", userData.image.uri, true);
      if (res.success) userData.image = res.data;
      else userData.image = null;
    }

    const missingFields = Object.keys(requiredFields).filter(
      (key) => !userData[key]
    );

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields
        .map((key) => requiredFields[key])
        .join(", ");

      return alert(
        `${t("edit-profile.errors.missing_fields")}: ${missingFieldNames}`
      );
    }

    const res = await updateUser(user?.id || null, userData);
    if (res.success) setUserData({ ...user, ...userData });

    setLoading(false);
  };

  const onPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setFormUser({ ...formUser, image: result.assets[0] });
    }
  };

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header title={t("edit-profile.title")} />

          {/* form */}
          <View style={styles.form}>
            <View style={styles.avatarContainer}>
              <Image source={imageSource} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={onPickImage}>
                <Icon
                  name="camera"
                  color={theme.colors.textDark}
                  size={20}
                  strokeWidth={2.5}
                />
              </Pressable>
            </View>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              {t("edit-profile.form.title")}
            </Text>
            <View style={styles.row}>
              <Input
                icon={
                  <Icon name="user" size={26} strokeWidth={1.6} color="black" />
                }
                containerStyle={styles.inputLeft}
                placeholder={t("edit-profile.form.first_name")}
                onChangeText={(e) => setInputForm("first_name", e)}
                value={formUser.first_name}
              />
              <Input
                containerStyle={styles.inputRight}
                placeholder={t("edit-profile.form.last_name")}
                onChangeText={(e) => setInputForm("last_name", e)}
                value={formUser.last_name}
              />
            </View>

            {["email", "phone_number", "bio", "address"].map((key) => {
              if (key === "address") {
                return (
                  <AddressInput
                    key={key}
                    setAddressInput={setAddressInput}
                    formUser={formUser}
                    loading={loading}
                  />
                );
              }

              return (
                <Input
                  key={key}
                  containerStyles={{ marginTop: hp(1) }}
                  placeholder={t(`edit-profile.form.${key}`)}
                  onChangeText={(e) => setInputForm(key, e)}
                  value={formUser[key]}
                  multiline={key === "bio"}
                  containerStyle={key === "bio" ? styles.bio : undefined}
                />
              );
            })}
            <Button
              title={t("edit-profile.form.save")}
              loading={loading}
              onPress={onSubmit}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center", // Ensures alignment across the row
  },
  inputLeft: {
    flex: 1, // Make sure it takes equal space
    marginRight: wp(2), // Adjust the spacing between inputs
  },
  inputRight: {
    flex: 1, // Ensure the right input takes equal space
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: theme.radius.xxl * 1.8,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.textLight,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  form: {
    gap: 18,
    marginTop: hp(2),
  },
  input: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    padding: 17,
    gap: 15,
    paddingHorizontal: 20,
  },
  bio: {
    flexDirection: "row",
    height: hp(15),
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});
