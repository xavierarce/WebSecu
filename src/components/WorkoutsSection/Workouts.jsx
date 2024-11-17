import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { wp } from "@/src/helpers/common";
import Header from "../Header/Header";

const defaultWorkout = {
  workout_id: 1,
  user_id: 101,
  name: "Full Body Strength",
  description:
    "A full-body workout to build strength using compound movements.",
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
export const WorkoutsTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header showBackButton={false} title={"Workouts"} mb={30} />
        <View>
          <Text>Add Workout</Text>
        </View>
        <View>
          <Text>Your Workouts</Text>
          {[defaultWorkout, defaultWorkout, defaultWorkout].map((item) => (
            <Text key={item.workout_id}>DS</Text>
          ))}
          <Text>Add Workout</Text>
        </View>
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
