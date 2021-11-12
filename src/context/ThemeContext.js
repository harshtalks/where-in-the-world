import { useState, createContext, useContext } from "react";

export const themeContext = createContext();

const getTheme = () => window.localStorage.getItem("theme");

export const ThemeProvider = ({ children }) => {
  const whichTheme = getTheme() ? getTheme() : "dark";
  const [theme, setTheme] = useState(whichTheme);

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);
