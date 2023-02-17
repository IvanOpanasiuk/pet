import { Link, type LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: Props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
      <Link
          to={to}
          className={classNames(styles.AppLink, {}, [className, styles[theme]])}
          {...otherProps}
        >
          {children}
      </Link>
  );
};
