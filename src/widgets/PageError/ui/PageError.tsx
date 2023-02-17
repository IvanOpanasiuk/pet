import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';

interface Props {
  className?: string;
}

export const PageError = (props: Props) => {
  const { t } = useTranslation();
  const { className } = props;

  const reloadPage = () => {
    location.reload();
  };
  return <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <button onClick={reloadPage}>{t('Reload')}</button>
  </div>;
};
