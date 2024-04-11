import React, { useContext } from "react";

const themeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
