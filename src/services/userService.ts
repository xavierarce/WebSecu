import { supabase } from "../lib/supabase";

interface User {
  id: string;
  name?: string; // Add other user properties here as needed
  email?: string; // Example user properties
  // ... other properties
}
/**
 * Fetches user data from the "users" table in the Supabase database.
 * @function
 * @async
 *
 * @param {string} userId - The unique identifier of the user.
 * @returns {Promise<object | null>} - A promise that resolves to the user data object if successful, or null if an error occurs.
 *
 * @throws {Error} - Throws an error if the request fails.
 */
export const getUserData = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*") // Replace '*' with specific columns if necessary
      .eq("id", userId)
      .single(); // Fetch a single row

    if (error) {
      console.log("error", error.message);
      return { success: false, message: error.message };
    } else {
      return { success: true, data };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
      return { success: false, message: error.message };
    }
    console.log("Unknown error", error);
    return { success: false, message: "An unknown error occurred." };
  }
};

export const updateUser = async (
  userId: string | null,
  data: Partial<User>
) => {
  try {
    const { error } = await supabase
      .from("users")
      .update(data)
      .eq("id", userId);

    if (error) {
      console.log("error", error.message);
      return { success: false, message: error.message };
    } else {
      return { success: true, data };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
      return { success: false, message: error.message };
    }
    console.log("Unknown error", error);
    return { success: false, message: "An unknown error occurred." };
  }
};
