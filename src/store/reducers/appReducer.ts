/* import { Dispatch } from 'redux';

import { AppThunk } from '../types'; */

export type appReducerInitialStateType = {
  isLoading: boolean;
  // isAuth: boolean;
  isDarkMode: boolean;
  // error: null | string;
  // isInitialized: boolean;
  notification: null | string;
  error: string | null;
};

export const setIsLoading = 'APP/SET_IS_LOADING';
export const setError = 'APP/SET_ERROR';
export const setIsAuth = 'APP/SET_IS_AUTH';
export const setIsDarkMode = 'APP/SET_IS_DARK_MODE';
export const setIsInitialized = 'APP/SET_IS_INITIALIZED';
export const setNotification = 'APP/SET_NOTIFICATION';

export type appReducerActionsType =
  | setIsLoadingACType
  | setIsDarkModeACType
  | setAppErrorACType;

export type setIsLoadingACType = ReturnType<typeof setIsLoadingAC>;
// export type setErrorACType = ReturnType<typeof setErrorAC>;
// export type setIsAuthACType = ReturnType<typeof setIsAuthAC>;
// export type setIsInitializedACType = ReturnType<typeof setIsInitializedAC>;
export type setNotificationACType = ReturnType<typeof setNotificationAC>;
export type setIsDarkModeACType = ReturnType<typeof setIsDarkModeAC>;
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>;

export const appReducerInitState = {
  // isInitialized: false,
  isLoading: false,
  isDarkMode: false,
  // isAuth: true,
  // error: null,
  notification: null,
  error: null,
};

export const appReducer = (
  state: appReducerInitialStateType = appReducerInitState,
  action: appReducerActionsType,
): appReducerInitialStateType => {
  switch (action.type) {
    case setIsLoading:
      return { ...state, isLoading: action.isLoading };
    case setIsDarkMode:
      return { ...state, isDarkMode: action.isDarkMode };
    case 'APP/SET-APP-ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setIsLoadingAC = (isLoading: boolean) =>
  ({
    type: setIsLoading,
    isLoading,
  } as const);
// export const setErrorAC = (error: null | string) =>
//   ({
//     type: setError,
//     error,
//   } as const);
// export const setIsAuthAC = (isAuth: boolean) =>
//   ({
//     type: setIsAuth,
//     isAuth,
//   } as const);
export const setIsDarkModeAC = (isDarkMode: boolean) =>
  ({
    type: setIsDarkMode,
    isDarkMode,
  } as const);
// export const setIsInitializedAC = (isInitialized: boolean) =>
//   ({
//     type: setIsInitialized,
//     isInitialized,
//   } as const);
export const setNotificationAC = (notification: null | string) =>
  ({
    type: setNotification,
    notification,
  } as const);

// export const initializeTC = (): AppThunk => (dispatch: Dispatch) => {
//   dispatch(setIsLoadingAC(true));
//   return authApi
//     .authMe()
//     .then(res => {
//       dispatch(setIsAuthAC(true));
//       dispatch(setUserProfileDataAC(res.data));
//     })
//     .catch(() => {
//       console.log('redirect to login');
//     })
//     .finally(() => {
//       dispatch(setIsInitializedAC(true));
//       dispatch(setIsLoadingAC(false));
//     });
// };

export const setAppErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-APP-ERROR',
    error,
  } as const);
