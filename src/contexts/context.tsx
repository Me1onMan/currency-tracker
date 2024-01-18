import { createContext } from "react";

interface IThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const MyThemeContext = createContext<IThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
});

export default MyThemeContext;
