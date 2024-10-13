import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import getSourceService from "@/src/services/imageSourceService"; // Ensure this path is correct
import Icon from "@/assets/icons";
import { theme } from "@/src/constants/theme";
import { hp } from "@/src/helpers/common";

export const ProfileHeader = ({ user = {} }) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 15 }}>
        <View style={styles.avatarContainer}>
          <Image
            source={getSourceService(user.avatarUrl)}
            style={[
              styles.avatar,
              { borderColor: "black", borderRadius: theme.radius.xxl },
            ]}
          />
          <Pressable>
            <Icon name="edit" color="black" strokeWidth={2.5} size={20} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
