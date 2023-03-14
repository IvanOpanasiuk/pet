import { loginActions, loginReducer } from '../../model/slice/loginSlice';
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
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicLoaderComponent, type ReducerList } from 'shared/lib/components/DynamicLoaderComponent/DynamicLoaderComponent';

const initialReducers: ReducerList = {
  loginForm: loginReducer
};

interface Props {
  className?: string;
}

const LoginForm = memo(({ className }: Props) => {
  const dispatch = useDispatch();
  const appDispatch = useDispatch<AppDispatch>();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
  return (
      <DynamicLoaderComponent reducers={initialReducers}>
          <div className={classNames(styles.LoginForm, {}, [className])}>
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
          </div>
      </DynamicLoaderComponent>);
});

export default LoginForm;
