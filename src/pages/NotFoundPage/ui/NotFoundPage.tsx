
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

export const NotFoundPage = (props: Props) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.NotFoundPage)}>
      {t('Not Found Page')}
  </div>;
};
