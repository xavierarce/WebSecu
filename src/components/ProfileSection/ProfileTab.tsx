import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { supabase } from "@/src/lib/supabase"; // Ensure this path is correct
import { useAuthContext } from "@/src/context/AuthContext"; // Ensure you have this context set up
import { ProfileHeader } from "./ProfileHeader"; // Ensure this path is correct
import { useRouter } from "expo-router";
import { wp } from "@/src/helpers/common";

interface User {
  name: string;
  email: string;
  address: string;
  avatarUrl?: string;
}

/**
 * @component
 * ProfileTab component renders the user's profile information and provides
 * an option to log out. It utilizes the authentication context to manage
 * the authentication state and the router for navigation.
 *
 * @returns {React.FC} A React functional component that displays the user's profile and a logout button.
 */
export const ProfileTab: React.FC = () => {
  const { setAuth } = useAuthContext(); // Use your Auth context to manage authentication state
  const router = useRouter();

  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "johndoe@mail.com",
    address: "123 Main St, New York, NY",
    // avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg",
  });

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error logging out", error.message);
    } else {
      setAuth(null); // Update your auth state after successful logout
    }
  };

  return (
    <View style={styles.container}>
      <ProfileHeader user={user} router={router} />

      {/* Actions Section */}
      <View>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 30,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
