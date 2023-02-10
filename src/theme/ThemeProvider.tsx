import React, { useMemo, useState } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const defaulTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.NORMAL;

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaulTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
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
