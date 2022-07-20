import { createContext, FC, ReactNode, useMemo, useReducer } from 'react';

import { DarkModeReducer } from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

/* type DarkModeContextProps = {
  state: { darkMode: boolean };
  dispatch: ({ type }: { type: string }) => void;
}; */

export const DarkModeContext = createContext<any>(INITIAL_STATE);

type DarkModeContextProviderPropsType = {
  children: ReactNode;
};

export const DarkModeContextProvider: FC<DarkModeContextProviderPropsType> = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  const value = useMemo(() => ({ darkMode: state.darkMode, dispatch }), [state]);

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};
