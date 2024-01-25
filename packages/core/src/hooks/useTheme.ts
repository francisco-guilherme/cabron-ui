import { useContext } from "react";

import { HvThemeContext } from "../Provider";

export const useTheme = () => {
  const context = useContext(HvThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a Provider");
  }
  return context;
};
