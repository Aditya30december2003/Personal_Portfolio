import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Check for the saved theme in localStorage during initialization,
  // default to dark mode if no theme is saved
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme ? storedTheme === "dark" : true); // default to true (dark mode)

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.setAttribute("data-theme", theme);

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [isDarkMode, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};