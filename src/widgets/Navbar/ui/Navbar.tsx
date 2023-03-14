/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/authByUsername';
import { t } from 'i18next';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handlerCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const handlerShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handlerLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
        <div className={classNames(styles.Navbar)}>
            <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handlerLogout}>
                {t('Logout')}
            </Button>
        </div>);
  }

  return (
      <div className={classNames(styles.Navbar)}>
          <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handlerShowModal}>
              {t('Login')}
          </Button>
          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handlerCloseModal} />}
      </div>
  );
};
