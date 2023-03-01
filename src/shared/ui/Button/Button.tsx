import { type ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
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
}

export const Button = (props: Props) => {
  const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;
  return (
      <button
          className={classNames(styles.Button, { [styles.square]: square }, [className, styles[theme], styles[size]])}
          {...otherProps}
        >
          {children}
      </button>
  );
};
