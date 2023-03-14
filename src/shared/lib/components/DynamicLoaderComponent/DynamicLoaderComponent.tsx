import { type Reducer } from '@reduxjs/toolkit';
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface Props {
  reducers: ReducerList;
  removeAfterUnMount?: boolean;
  children: ReactNode;
}

export const DynamicLoaderComponent = (props: Props) => {
  const { children, removeAfterUnMount = true, reducers } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `INIT_FORM ${name}` });
    });
    return () => {
      if (removeAfterUnMount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `REMOVE_FORM ${name}` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>
      {children}
  </>;
};
