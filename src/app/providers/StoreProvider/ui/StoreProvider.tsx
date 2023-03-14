import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initalState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initalState, asyncReducers } = props;

  const store = createReduxStore(
    initalState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );
  return <Provider store={store}>
      {children}
  </Provider>;
};
