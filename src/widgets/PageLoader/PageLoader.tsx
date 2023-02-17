import classNames from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface Props {
  className?: string;
}

export const PageLoader = (props: Props) => {
  const { className } = props;
  return <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader />
  </div>;
};
