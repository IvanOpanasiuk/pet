import { type ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: Props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
      <button
          className={classNames(styles.Button, {}, [className, styles[theme]])}
          {...otherProps}
        >
          {children}
      </button>
  );
};
