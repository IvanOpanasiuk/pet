
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
  const { t } = useTranslation('nav');
  return (
      <div className={classNames(styles.Navbar)}>
          <div className={styles.Links}>
              <AppLink
                  theme={AppLinkTheme.SECONDARY}
                  className={styles.LinkItem}
                  to={'/'}
                >
                  {t('Main')}
              </AppLink>
              <AppLink
                  theme={AppLinkTheme.SECONDARY}
                  className={styles.LinkItem}
                  to={'/about'}
                >
                  {t('About')}
              </AppLink>
          </div>
      </div>
  );
};
