import React, { JSX } from "react";
import { useTheme } from "@contexts/ThemeProvider";

import { Input, Label } from "./styled";

export default function ThemeSwitcher(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Input
        type="checkbox"
        id="theme-switcher"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <Label id="cy-theme-toggler" htmlFor="theme-switcher" />
    </>
  );
}
