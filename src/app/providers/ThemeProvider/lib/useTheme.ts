import { useContext } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeProps {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeProps {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
