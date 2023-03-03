import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  domNode?: HTMLElement;
}

export const Portal = ({ children, domNode = document.body }: Props) => {
  return createPortal(children, domNode);
};
