import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthContext } from "@/src/context/AuthContext";
import { hp, wp } from "@/src/helpers/common";
import { theme } from "@/src/constants/theme";
import Icon from "@/assets/icons";
import Avatar from "../Avatar/Avatar";

/**
 * @component
 * HomeTab component renders the main view for the home tab of the Gym Lift Tracker app.
 * It displays the user's avatar, a title, and a set of icons.
 *
 * @returns {JSX.Element} The rendered HomeTab component.
 */
export const HomeTab: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gym Style</Text>
        <View style={styles.icons}>
          <Avatar
            uri={user?.image}
            size={hp(4.3)}
            rounded={theme.radius.sm}
            style={{ borderWidth: 2 }}
          />
          {["heart", "plus"].map((iconName) => (
            <Pressable key={iconName}>
              <Icon
                name={iconName as "heart" | "plus"}
                size={hp(3.2)}
                strokeWidth={2}
                color={theme.colors.text}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  avatarlmage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: "continuous",
    borderWidth: 3,
    borderColor: theme.colors.gray,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  noPosts: {
    textAlign: "center",
    fontSize: hp(2),
    color: theme.colors.text,
  },
  pill: {
    position: "absolute",
    top: -4,
    right: -10,
  },
});
