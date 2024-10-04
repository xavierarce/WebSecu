import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import Button from "@/src/components/Button/Button";
import { useAuthContext } from "@/src/context/AuthContext";
import { supabase } from "@/src/lib/supabase";

const Home = () => {
  const { setAuth } = useAuthContext();

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error logging out", error.message);
    }
  };

  return (
    <ScreenWrapper>
      <View>
        <Text>This is Home </Text>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
