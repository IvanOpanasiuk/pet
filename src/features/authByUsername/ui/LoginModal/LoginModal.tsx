
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: Props) => {
  const { isOpen, onClose } = props;
  return (
      <Modal
          isOpen={isOpen}
          onClose={onClose}
          lazy
       >
          <Suspense fallback={<Loader />}>
              <LoginFormAsync />
          </Suspense>
      </Modal>);
};
