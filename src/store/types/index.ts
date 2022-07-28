import { ThunkAction } from 'redux-thunk';

import { appReducerActionsType, ActionTypeAuth } from '../reducers';
import { ActionTypeEmployee } from '../reducers/employeeReducer';
import { store, rootReducer } from '../store';

export type RootStateType = ReturnType<typeof store.getState>;
export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppRootActionType =
  | ActionTypeAuth
  | appReducerActionsType
  | ActionTypeEmployee;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducerType,
  unknown,
  AppRootActionType
>;
