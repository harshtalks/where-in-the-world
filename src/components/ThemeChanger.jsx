import { ReactComponent as Moon } from "../svg/half.svg";
import { ChangeTheme, Text } from "../styles/theme.styles";
import { useThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";
const ThemeChanger = () => {
  const [theme, setTheme] = useThemeContext();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };
  return (
    <ChangeTheme onClick={toggleTheme}>
      <Moon />
      <Text>{theme === "dark" ? "Light Mode" : "Dark Mode"}</Text>
    </ChangeTheme>
  );
};

export default ThemeChanger;
