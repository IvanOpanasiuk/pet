import { type LoginSchema } from 'features/authByUsername';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { type CombinedState, type AnyAction, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducer
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReduceManager;
}
