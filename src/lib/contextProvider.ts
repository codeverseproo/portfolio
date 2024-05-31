import { useContext } from "react";
import { themeContext } from "../contextProviders/themeContext";

export function useThemeContext() {
  const context = useContext(themeContext);
  return context;
}
