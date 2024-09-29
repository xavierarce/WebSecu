import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { AuthProvider, useAuthContext } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout = () => {
  const { setAuth } = useAuthContext();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session?.user);
        router.replace("/main/home");
      } else {
        setAuth(null);
        router.replace("/welcome");
      }
    });
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;

const styles = StyleSheet.create({});
