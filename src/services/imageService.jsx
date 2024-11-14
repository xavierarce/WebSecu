import defaultImage from "../../assets/images/defaultUser.png";
import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";
import { supabase } from "../lib/supabase";
import { EXPO_PUBLIC_SUPABASE_URL } from "../constants/supabase";

/**
 * Retrieves the image source based on the provided image path.
 *
 * @param {string | null} imagePath - The path to the image. If null, a default image is returned.
 * @returns {ImageSourcePropType} The image source object.
 */
export const getImageSource = (imagePath) => {
  if (imagePath) {
    return getSupabaseFileUrl(imagePath);
  } else {
    return defaultImage;
  }
};

export const getSupabaseFileUrl = (path) => {
  return `${EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${path}`;
};

export const uploadFile = async (folderName, fileUri, isImage = true) => {
  try {
    let fileName = getFilePath(folderName, isImage);
    const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    //deco
    let imageData = await decode(fileBase64);

    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(fileName, imageData, {
        contentType: isImage ? "image/*" : "video/*",
        upsert: false,
        cacheControl: "3600",
      });
    if (error) {
      console.error("File Upload Error", error);
      return { success: false, message: "File Upload Error" };
    }

    return { success: true, data: data.path };
  } catch (error) {
    console.error("File Upload Error", error);
    return { success: false, message: "File Upload Error" };
  }
};

export const getFilePath = (folderName, isImage = true) => {
  return `/${folderName}/${new Date().getTime()}.${isImage ? "png" : "mp4"}`;
};
