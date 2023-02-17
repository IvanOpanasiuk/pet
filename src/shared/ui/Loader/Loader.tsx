import './Loader.scss';

interface Props {
  className?: string;
}

export const Loader = (props: Props) => {
  return <div className="lds-heart"><div></div></div>;
};
