import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
          <LoginForm />
      </Modal>);
};
