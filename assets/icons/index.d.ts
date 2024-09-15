import HomeIcon from "./Home";
import ArrowLeftIcon from "./ArrowLeft";

export const icons = {
  home: HomeIcon,
  arrowLeft: ArrowLeftIcon,
};

export interface IconProps {
  name: keyof typeof icons; // Ensures only keys from the 'icons' object are allowed
  size?: number;
  strokeWidth?: number;
  color?: string;
  [key: string]: any; // This allows any additional props to be passed
}
