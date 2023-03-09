import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface Props {
  className?: string;
}

export const LoginForm = (props: Props) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.LoginForm)}>

      <Input autofocus type="text" placeholder={t('Enter name')} className={styles.input} />
      <Input type="text" placeholder={t('Enter password')} className={styles.input} />
      <Button className={styles.loginBtn}>{t('Login')}</Button>
  </div>;
};
