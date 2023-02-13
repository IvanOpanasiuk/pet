import { Link } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import styles from './Navbar.module.scss';

type Props = {
  className?: string;
};

export const Navbar = ({ className }: Props) => {
  return (
    <div className={classNames(styles.Navbar)}>
      <div className={styles.Links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.LinkItem}
          to={'/'}
        >
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.LinkItem}
          to={'/about'}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
