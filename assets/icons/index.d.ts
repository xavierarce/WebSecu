import HomeIcon from "./Home";
import ArrowLeftIcon from "./ArrowLeft";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";

export const icons = {
  home: HomeIcon,
  arrowLeft: ArrowLeftIcon,
  mail: Mail,
  lock: Lock,
  user: User,
};

export interface IconProps {
  name: keyof typeof icons; // Ensures only keys from the 'icons' object are allowed
  size?: number;
  strokeWidth?: number;
  color?: string;
  [key: string]: any; // This allows any additional props to be passed
}
