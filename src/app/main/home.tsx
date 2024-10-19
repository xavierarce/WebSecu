import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "@/assets/icons";
import { ProfileTab } from "@/src/components/ProfileSection/ProfileTab";
import { HomeTab } from "@/src/components/HomeTab/HomeTab";

const Tab = createBottomTabNavigator();

const HomeScreen = () => <HomeTab />;
const ProfileScreen = () => <ProfileTab />;

/**
 * @component
 * Home component that serves as the main entry point for the application's home screen.
 * It uses a tab navigator to switch between the Home and Profile screens.
 *
 * @returns {JSX.Element} The rendered Home component.
 *
 */
const Home = () => {
  return (
    <ScreenWrapper>
      <NavigationContainer independent>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => <Icon name="home" size={24} color="black" />,
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

const styles = StyleSheet.create({});
