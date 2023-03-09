/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/authByUsername';
import { t } from 'i18next';
import { useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import { Modal } from 'shared/ui/Modal/Modal';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handlerCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const handlerShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
      <div className={classNames(styles.Navbar)}>
          <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handlerShowModal}>
              {t('Login')}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={handlerCloseModal} />
          {/* <Modal isOpen={isAuthModal} onClose={handlerOnToggle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veniam ipsam facere, modi itaque at perferendis.
              Amet saepe consectetur, repudiandae tenetur porro expedita,
              illo, excepturi ipsum nostrum deleniti adipisci cumque quibusdam.
          </Modal> */}
      </div>
  );
};
