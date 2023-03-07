
import { useTheme } from 'app/providers/ThemeProvider';

import classNames from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';

const App = (): JSX.Element => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
};

export default App;
