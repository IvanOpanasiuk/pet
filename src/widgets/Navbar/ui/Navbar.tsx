import classNames from 'shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
  return (
      <div className={classNames(styles.Navbar)}>
          <div className={styles.Links}>

          </div>
      </div>
  );
};
