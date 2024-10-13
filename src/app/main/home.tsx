import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import Button from "@/src/components/Button/Button";
import { useAuthContext } from "@/src/context/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import Icon from "@/assets/icons";
import { ProfileTab } from "@/src/components/ProfileSection/ProfileTab";

const Tab = createBottomTabNavigator();

const SmallComponent = ({ text }: { text: string }) => (
  <View>
    <Text>{text}</Text>
  </View>
);

const HomeScreen = () => <SmallComponent text="Home Screen" />;
const ProfileScreen = () => <ProfileTab />;

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
