import React from "react";
import { StyleSheet, View } from "react-native";
import { wp } from "@/src/helpers/common";
import Header from "../Header/Header";

/**
 * @component
 * ProfileTab component renders the user's profile information and provides
 * an option to log out. It utilizes the authentication context to manage
 * the authentication state and the router for navigation.
 *
 * @returns {React.FC} A React functional component that displays the user's profile and a logout button.
 */
export const CalendarTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header showBackButton={false} title={"Calendar"} mb={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    backgroundColor: "#f9f9f9",
  },
});
