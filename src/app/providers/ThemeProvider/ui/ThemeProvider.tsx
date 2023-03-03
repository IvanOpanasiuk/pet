import React, { useMemo, useState } from 'react';
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY
} from '../lib/ThemeContext';

const defaulTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.NORMAL;

interface Props {
  children?: React.ReactNode;
  initialTheme?: Theme;
};

const ThemeProvider = (props: Props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaulTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
