import { authApi, LoginParamsType } from '../../api/crmAPI';
import { AppThunk } from '../index';

import { handleServerNetworkError } from 'utils';

export type StatusType = 'idle' | 'success' | 'loading' | 'failed';
const initialstate = {
  isLoggedIn: false,
  isAuth: false,
  status: 'idle' as StatusType,
};

export type InitialAutchType = typeof initialstate;
export type ActionTypeAuth =
  | ReturnType<typeof setLoginAC>
  | ReturnType<typeof setInitializedAC>
  | ReturnType<typeof setAppStatusAC>;

export const authReducer = (
  state: InitialAutchType = initialstate,
  action: ActionTypeAuth,
): InitialAutchType => {
  switch (action.type) {
    case 'AUTH/SET-LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn };
    case 'AUTH/SET-INITIALIZED':
      return { ...state, isAuth: action.isAuth };
    case 'APP/SET-APP-STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setLoginAC = (isLoggedIn: boolean) =>
  ({
    type: 'AUTH/SET-LOGIN',
    isLoggedIn,
  } as const);

export const setInitializedAC = (isAuth: boolean) =>
  ({
    type: 'AUTH/SET-INITIALIZED',
    isAuth,
  } as const);

export const setAppStatusAC = (status: StatusType) =>
  ({
    type: 'APP/SET-APP-STATUS',
    status,
  } as const);

export const setLoginTC =
  (data: LoginParamsType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'));
    try {
      await authApi.createLogin(data);
      dispatch(setLoginAC(true));
    } catch (e: any) {
      handleServerNetworkError(e, dispatch);
    } finally {
      dispatch(setAppStatusAC('success'));
    }
  };

export const deleteLoginTC = (): AppThunk => async dispatch => {
  dispatch(setAppStatusAC('loading'));
  try {
    await authApi.deleteLogin();
    dispatch(setLoginAC(false));
  } catch (e: any) {
    handleServerNetworkError(e, dispatch);
  } finally {
    dispatch(setAppStatusAC('success'));
    dispatch(setInitializedAC(true));
  }
};

export const setAuthTC = (): AppThunk => async dispatch => {
  try {
    await authApi.authMe();
    dispatch(setLoginAC(true));
  } catch (e: any) {
    handleServerNetworkError(e, dispatch);
  } finally {
    dispatch(setInitializedAC(true));
  }
};
