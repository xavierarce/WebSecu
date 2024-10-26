import React from "react";
import PropTypes from "prop-types";
import { theme } from "@/src/constants/theme";

import HomeIcon from "./Home";
import ArrowLeftIcon from "./ArrowLeft";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";
import EditIcon from "./Edit";
import Heart from "./Heart";
import Plus from "./Plus";
import Call from "./Call";
import Camera from "./Camera";

export const icons = {
  home: HomeIcon,
  arrowLeft: ArrowLeftIcon,
  edit: EditIcon,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  call: Call,
  camera: Camera,
};

const Icon = ({
  name,
  size = 24,
  strokeWidth = 1.9,
  color = theme.colors.textLight,
  ...props
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon component "${name}" does not exist.`);
    return null; // Return null if the icon doesn't exist
  }

  return (
    <IconComponent
      {...props} // Pass the rest of the props
      height={size} // Use destructured size
      width={size} // Use destructured size
      strokeWidth={strokeWidth} // Use destructured strokeWidth
      color={color} // Use destructured color
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired, // Validate name against the keys of icons
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
