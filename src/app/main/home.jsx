import React, { useEffect } from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "@/assets/icons";
import { ProfileTab } from "@/src/components/ProfileSection/ProfileTab";
import { HomeTab } from "@/src/components/HomeTab/HomeTab";
import { ProgramsTab } from "@/src/components/ProgramsSection/Programs";
import { CalendarTab } from "@/src/components/CalendarSection/CalendarTab";
import { router } from "expo-router";

const Tab = createBottomTabNavigator();

const HomeScreen = () => <HomeTab />;
const ProfileScreen = () => <ProfileTab />;
const ProgramsScreen = () => <ProgramsTab />;
const CalendarScreen = () => <CalendarTab />;

/**
 * @component
 * Home component that serves as the main entry point for the application's home screen.
 * It uses a tab navigator to switch between the Home and Profile screens.
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 */
const Home = () => {
  useEffect(() => {
    router.push("main/program");
  }, []);
  return (
    <ScreenWrapper>
      <NavigationContainer independent>
        <Tab.Navigator>
          <Tab.Screen
            name="Dashboard"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icon name="home" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Workout"
            component={ProgramsScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon name="dumbbell" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon name="calendar" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Programs"
            component={ProgramsScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon name="programs" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icon name="user" size={24} color="black" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ScreenWrapper>
  );
};

export default Home;
