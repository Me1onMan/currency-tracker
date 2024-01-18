import React, { useContext, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../constants/theme";
import MyThemeContext from "./context";

interface IThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export function useTheme() {
  return useContext<IThemeContextProps>(MyThemeContext);
}

interface IProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: IProps) {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") || "dark",
  );
  const toggleThemeHandler = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
  };

  const themeValues = useMemo(
    () => ({
      theme: currentTheme,
      toggleTheme: toggleThemeHandler,
    }),
    [currentTheme],
  );

  console.log(currentTheme);
  const themeMode = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <MyThemeContext.Provider value={themeValues}>
      <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
    </MyThemeContext.Provider>
  );
}
