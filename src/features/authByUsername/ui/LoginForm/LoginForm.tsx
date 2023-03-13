import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface Props {
  className?: string;
}

export const LoginForm = memo(({ className }: Props) => {
  const dispatch = useDispatch();
  const appDispatch = useDispatch<AppDispatch>();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    appDispatch(loginByUsername({ username, password }));
  }, [appDispatch, password, username]);

  const { t } = useTranslation();
  return <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Authorisation form')} />
      {error && <Text text={t('Something went wrong')} theme={TextTheme.ERROR} />}

      <Input
          value={username}
          onChange={onChangeUsername}
          autofocus type="text"
          placeholder={t('Enter name')}
          className={styles.input}
      />
      <Input
          value={password}
          onChange={onChangePassword}
          type="text"
          placeholder={t('Enter password')}
          className={styles.input}
      />
      <Button
          disabled={isLoading}
          onClick={onClickLogin}
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
      >
          {t('Login')}
      </Button>
  </div>;
});
