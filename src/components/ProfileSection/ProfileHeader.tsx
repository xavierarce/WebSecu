import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@/assets/icons";
import { theme } from "@/src/constants/theme";
import { hp, wp } from "@/src/helpers/common";
import Header from "../Header/Header";
import Avatar from "../Avatar/Avatar";

interface ProfileHeaderProps {
  user?: {
    image?: string;
    name?: string;
    address?: string;
    email?: string;
    phone_number?: string;
    bio?: string;
  };
  router: any;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user = {},
  router,
}) => {
  return (
    <View style={styles.container}>
      {/* header quoi */}
      <Header title={"Profile"} mb={30} />

      {/* user Image */}
      <View style={styles.bodyContainer}>
        <View style={{ gap: 15 }}>
          <View style={styles.avatarContainer}>
            <Avatar
              uri={user?.image || ""}
              size={hp(12)}
              rounded={theme.radius.xxl * 1.4}
            />
            <Pressable
              style={styles.editIcon}
              onPress={() => router.push("main/editProfile")}
            >
              <Icon
                name="edit"
                color={theme.colors.textDark}
                strokeWidth={2.5}
                size={20}
              />
            </Pressable>
          </View>
        </View>

        {/* user info */}
        <View style={{ alignItems: "center", gap: 2 }}>
          <Text style={styles.userName}>{user && user.name}</Text>
          <Text style={styles.infoText}>{user && user?.address}</Text>
        </View>

        {/* Bio */}
        <View style={{ gap: 10 }}>
          <View style={[styles.info, { marginTop: 10 }]}>
            <Icon name="mail" size={20} color={theme.colors.textDark} />
            <Text style={styles.infoText}>{user && user?.email}</Text>
          </View>
          {user && user?.phone_number && (
            <View style={styles.info}>
              <Icon name="call" size={20} color={theme.colors.textDark} />
              <Text style={styles.infoText}>{user && user?.phone_number}</Text>
            </View>
          )}
          {user && user?.bio && (
            <Text style={styles.infoText}>{user && user?.bio}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: "#f9f9f9",
  },
  bodyContainer: {
    flex: 1,
    gap: 10,
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf: "center",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: { fontSize: 16, color: theme.colors.textDark, fontWeight: "500" },
  info: { flexDirection: "row", alignItems: "center", gap: 10 },
});
