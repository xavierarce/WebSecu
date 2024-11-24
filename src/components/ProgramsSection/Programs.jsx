import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { wp } from "@/src/helpers/common";
import Header from "../Header/Header";
import { theme } from "@/src/constants/theme";
import { SearchBar } from "@rneui/themed";
import { router } from "expo-router";

const defaultProgram = {
  program_id: 1,
  user_id: 101,
  name: "Full Body Strength",
  description:
    "A full-body program to build strength using compound movements.",
  difficulty: "Advanced",
  exercises: [
    {
      exercise_id: 1, // Squat
      sets: 3,
      reps: 10,
    },
    {
      exercise_id: 2, // Bench Press
      sets: 3,
      reps: 8,
    },
    {
      exercise_id: 3, // Deadlift
      sets: 3,
      reps: 8,
    },
  ],
};

/**
 * @component
 * ProfileTab component renders the user's profile information and provides
 * an option to log out. It utilizes the authentication context to manage
 * the authentication state and the router for navigation.
 *
 * @returns {React.FC} A React functional component that displays the user's profile and a logout button.
 */
export const ProgramsTab = () => {
  return (
    <View style={styles.container}>
      <Header showBackButton={false} title={"Programs"} mb={30} />
      <Text style={{ fontWeight: "bold" }}>Current Program: </Text>
      <Pressable
        style={styles.createProgramCard}
        onPress={() => {
          router.push("main/program");
          console.log("Create a new program");
        }}
      >
        <Text style={styles.createProgramCardText}>Create a new program</Text>
      </Pressable>
      <View style={styles.programList}>
        <Text style={styles.programTitle}>Discover Programs</Text>
        <SearchBar
          placeholder="..."
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
        />
        {[defaultProgram, defaultProgram, defaultProgram].map((item, idx) => (
          <View style={styles.programCard} key={idx}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {item?.name}
            </Text>
            <Text>{item?.description}</Text>
          </View>
        ))}
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
  createProgramCard: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  createProgramCardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  programCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  programList: {
    marginTop: 20,
  },
  programTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchBarContainer: {
    backgroundColor: "white", // Removes the dark square background
    borderTopWidth: 0, // Removes default border
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "transparent", // Changes the input field's background
    borderRadius: 10, // Optional: Adds rounded corners
    height: 40, // Optional: Adjusts height
  },
  searchBarInput: {
    color: "white", // Adjusts text color
  },
});
