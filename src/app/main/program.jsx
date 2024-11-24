import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";

import { wp } from "@/src/helpers/common";

import workout from "@/src/data/workout";

/**
 * @component
 * Home component that serves as the main entry point for the application's home screen.
 * It uses a tab navigator to switch between the Home and Profile screens.
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 */
const Program = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title={"Program"} mb={30} />
        <View style={styles.workoutList}>
          <Text style={styles.workoutTitle}>
            Select your program different workouts
          </Text>
          {[workout, workout, workout].map((item, idx) => (
            <View style={styles.workoutCard} key={idx}>
              <Text style={styles.workoutTitle}>{item?.name}</Text>
              <Text>{item?.description}</Text>
            </View>
          ))}
          <View style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>Add custom a Workout</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Program;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    backgroundColor: "#f9f9f9",
  },
  workoutCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
