export type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "normal"
  | "bold";

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
  gray: string;
  text: string;
  textLight: string;
  textDark: string;
  rose: string;
  roseLight: string;
}

export interface ThemeFonts {
  medium: FontWeight;
  semibold: FontWeight;
  bold: FontWeight;
  extraBold: FontWeight;
}

export interface ThemeRadius {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
  radius: ThemeRadius;
}
