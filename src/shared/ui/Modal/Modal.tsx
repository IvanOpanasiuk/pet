import { useTheme } from 'app/providers/ThemeProvider';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface Props {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: Props) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme();

  const handlerClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handlesOnClickEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handlerClose();
    }
  }, [handlerClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handlesOnClickEscape);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handlesOnClickEscape);
    };
  }, [isOpen, handlesOnClickEscape]);

  const handlerClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
      <Portal>
          <div className={classNames(styles.Modal, mods, [className, theme])}>
              <div className={styles.overlay} onClick={handlerClose}>
                  <div className={styles.content} onClick={handlerClickContent}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};
