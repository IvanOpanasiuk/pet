import { useContext } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeProps {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme (): UseThemeProps {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.NORMAL;
        break;
      case Theme.NORMAL:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.NORMAL;
    };

    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme
  };
}
