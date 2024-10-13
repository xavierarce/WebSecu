import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { AuthProvider, useAuthContext } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

const _layout: React.FC = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout: React.FC = () => {
  const { setAuth } = useAuthContext();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setAuth({
            ...session?.user,
            id: session.user?.id || "",
            email: session.user?.email || "",
          });
          router.replace("/main/home");
        } else {
          setAuth(null);
          router.replace("/welcome");
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
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
