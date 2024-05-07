import { duration } from "@mui/material";
import create from "@mui/material/styles/createTransitions";
import zIndex from "@mui/material/styles/zIndex";

const color = {
    black: "black",
  
    gray800: "#27272a",
    gray700: "#3f3f46",
    gray600: "#52525b",
    gray500: "#71717a",
    gray400: "#a1a1aa",
    gray300: "#d4d4d8",
    gray200: "#e4e4e7",
    gray100: "#f4f4f5",
  
    white: "white",
  
    blue900: "#172554",
    blue800: "#1e40af",
    blue700: "#1d4ed8",
    blue600: "#2563eb",
    blue500: "#3b82f6",
    blue400: "#60a5fa",
    blue300: "#93c5fd",
    blue200: "#bfdbfe",
    blue100: "#dbeafe",
  
    red300: "#c50000",
    red200: "#ea0000",
    red100: "#fff2f2",
  
    pink: "#C161AC",

    myYellow: "#F8DEB9",
    myYellowDark: "#D4C59E",
    myYellowHover: "#FBD995",

    myBlue: "#C1CCE0",
    myBlueDark: "#9AA4B8",
    myBlueHover: "#A4AFC5",

    myPink: "#F1C3CC",
};

const text = {
    large: {
        fontSize: "18px",
        lineHeight: "28px",
    },
    medium: {
        fontSize: "16px",
        lineHeight: "24px",
    },
    small: {
        fontSize: "14px",
        lineHeight: "20px",
    },
    xSmall: {
        fontSize: "12px",
        lineHeight: "20px",
    },
};

export const Theme = {
    color,
    text,
    zIndex,
    transitions: { duration, create },
};