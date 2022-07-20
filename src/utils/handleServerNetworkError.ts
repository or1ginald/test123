import { Dispatch } from 'redux';

import { setAppErrorAC } from 'store/reducers';

export const handleServerNetworkError = (e: any, dispatch: Dispatch): any => {
  if (e.name === 'SyntaxError') {
    return dispatch(setAppErrorAC(e.message));
  }
  if (e.message === 'Network Error') {
    return dispatch(setAppErrorAC('no connection!'));
  }
  return dispatch(setAppErrorAC('something error'));
};
