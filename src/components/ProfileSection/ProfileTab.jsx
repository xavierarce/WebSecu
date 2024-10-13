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

export const ProfileTab = () => {
  const { setAuth } = useAuthContext(); // Use your Auth context to manage authentication state
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@mail.com",
    address: "123 Main St, New York, NY",
    // avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg",
  });

  const onEdit = () => {
    Alert.alert("Edit Profile", "Feature to modify user profile will be here.");
  };

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
      <ProfileHeader user={user} />
      <View style={styles.infoContainer}>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.address}>{user.address}</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Actions Section */}
      <View style={styles.actionsContainer}>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
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
  actionsContainer: {
    marginTop: 20,
  },
});
