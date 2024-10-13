import { supabase } from "../lib/supabase";

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
  } catch (error: any) {
    console.log("error", error.message);
    return { success: false, message: error.message };
  }
};
