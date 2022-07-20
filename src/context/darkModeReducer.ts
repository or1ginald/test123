export type DarkModeReducerStateType = {
  darkMode: boolean;
};

export const DarkModeReducer = (
  state: DarkModeReducerStateType,
  action: any,
): DarkModeReducerStateType => {
  switch (action.type) {
    case 'LIGHT': {
      return {
        darkMode: false,
      };
    }
    case 'DARK': {
      return {
        darkMode: true,
      };
    }
    case 'TOGGLE': {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};
