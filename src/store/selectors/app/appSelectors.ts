import { RootStateType } from 'store';

// export const getError = (state: RootStateType): string | null => state.app.error;
export const getNotification = (state: RootStateType): string | null =>
  state.app.notification;
// export const getIsAuth = (state: RootStateType): boolean => state.app.isAuth;
export const getIsDarkMode = (state: RootStateType): boolean => state.app.isDarkMode;
export const getIsLoading = (state: RootStateType): boolean => state.app.isLoading;
// export const getIsInitialized = (state: RootStateType): boolean =>
//   state.app.isInitialized;
