import { type ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BAKCGROUND = 'background',
  BAKCGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  'M' = 'size_m',
  'L' = 'size_l',
  'XL' = 'size_xl'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = (props: Props) => {
  const { className, children, theme, square, size = ButtonSize.M, disabled, ...otherProps } = props;
  const mods = {
    [styles.square]: square,
    [styles.disabled]: disabled
  };
  return (
      <button
          className={classNames(styles.Button, mods, [className, styles[theme], styles[size]])}
          disabled={disabled}
          {...otherProps}
        >
          {children}
      </button>
  );
};
