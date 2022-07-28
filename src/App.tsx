import React, { FC, useMemo } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import { ErrorSnackbar } from './components/AppError';
import Navbar from './components/navbar/Navbar';
import { Preloader } from './components/Preloader';
import { RoutesComponent } from './components/routesComponent/RoutesComponent';
import Sidebar from './components/sidebar/Sidebar';
import { getIsDarkMode } from './store';

import { RootReducerType } from 'store/types';
import './style/dark.scss';

const App: FC = () => {
  // const isInit = useSelector(getIsInitialized);
  const isDarkMode = useSelector(getIsDarkMode);
  /*  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? (mode: "light")
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  }); */
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(setAuthTC());
  // }, []);  DEV
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#7451f8',
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#7451f8',
      },
    },
  });

  const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth);

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  if (!isAuth) {
    return <Preloader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={isDarkMode ? 'app dark' : 'app'}>
        <div style={{ display: 'flex', width: '100%' }}>
          <Sidebar />
          <div style={{ flex: '6' }}>
            <Navbar />
            <RoutesComponent />
            <ErrorSnackbar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
