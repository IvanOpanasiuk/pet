import { type StateSchema } from './StateSchema';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
};