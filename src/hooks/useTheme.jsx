import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('@theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;

    const previousTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(previousTheme);
    root.classList.add(theme);
    localStorage.setItem('@theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
