import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import styles from './Sidebar.module.scss';

interface Props {
  className?: string;
}

export const Sidebar = (props: Props) => {
  const { t } = useTranslation('main');
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
      <div
          data-testid="sidebar"
          className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
            className
          ])}
        >
          <Button
              data-testid="sidebar-toggle"
              className={styles.CollapsBtn}
              onClick={onToggle}
              theme={ButtonTheme.BAKCGROUND_INVERTED}
              square
              size={ButtonSize.L}
            >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={styles.Items}>
              <div className={styles.Item}>
                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.main}
                  >
                      <MainIcon className={styles.Icon} />
                      <span className={styles.Link}>
                          {t('Main')}
                      </span>
                  </AppLink>
              </div>
              <div className={styles.Item}>
                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.about}
                  >
                      <AboutIcon className={styles.Icon} />
                      <span className={styles.Link}>
                          {t('About')}
                      </span>
                  </AppLink>
              </div>

          </div>
          <div className={styles.Switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={styles.Lang} />
          </div>
      </div>
  );
};
