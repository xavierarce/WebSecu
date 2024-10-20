import { ImageSourcePropType } from "react-native";
import defaultImage from "@/assets/images/defaultUser.png";

/**
 * Retrieves the image source based on the provided image path.
 *
 * @param {string | null} imagePath - The path to the image. If null, a default image is returned.
 * @returns {ImageSourcePropType} The image source object.
 */
const getSourceService = (imagePath: string | null): ImageSourcePropType => {
  if (imagePath) {
    return { uri: imagePath };
  } else {
    return defaultImage;
  }
};

export default getSourceService;
