import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { AuthProvider, useAuthContext } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { getUserData } from "../services/getUserData";

const _layout: React.FC = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout: React.FC = () => {
  const { setAuth, setUserData } = useAuthContext();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setAuth({
            ...session?.user,
            id: session.user?.id || "",
            email: session.user?.email || "",
          });
          updateUserData(session.user);
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

  const updateUserData = async (user: { id: string }) => {
    const { success, message, data } = await getUserData(user.id);

    if (success) setUserData(data);
    if (!success) Alert.alert("Error", message);
  };

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
