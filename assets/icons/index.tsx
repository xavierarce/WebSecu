import React from "react";
import { icons } from "./index.d";
import { theme } from "@/src/constants/theme";

// Define the type for the props
export interface IconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  [
    key: string
  ]: React.SVGProps<SVGSVGElement>[keyof React.SVGProps<SVGSVGElement>];
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      {...props}
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={props.color || theme.colors.textLight}
    />
  );
};

export default Icon;
