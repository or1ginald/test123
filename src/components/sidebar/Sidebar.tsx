import './sidebar.scss';
import 'style/dark.scss';
import React, { FC } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FeedIcon from '@mui/icons-material/Feed';
import HailIcon from '@mui/icons-material/Hail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getIsDarkMode } from 'store';
import { deleteLoginTC, setInitializedAC, setIsDarkModeAC } from 'store/reducers';
import { RootStateType } from 'store/types';

const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);
  // const isAuth = useSelector(getIsAuth);

  const deleteLogin = (): void => {
    dispatch(setInitializedAC(false));
    // @ts-ignore
    dispatch(deleteLoginTC());
  };
  const login = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn);

  if (!login) {
    return null;
  }
  return (
    <div className={isDarkMode ? 'sidebar dark' : 'sidebar'}>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={isDarkMode ? 'logo-dark' : 'logo'}>Точка Учета</div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/products" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Организации</span>
            </li>
          </Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Сотрудники</span>
            </li>
          </Link>
          <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <AccountTreeIcon className="icon" />
              <span>Проекты</span>
            </li>
          </Link>
          <Link to="/reports" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <FeedIcon className="icon" />
              <span>Отчеты</span>
            </li>
          </Link>
          <Link to="/customers" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <HailIcon className="icon" />
              <span>Заказчики</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Профиль</span>
            </li>
          </Link>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span onClick={deleteLogin}>Выйти</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        {/* eslint-disable */}
        <div className='colorOption' onClick={() => dispatch(setIsDarkModeAC(false))} />
        <div className='colorOption' onClick={() => dispatch(setIsDarkModeAC(true))} />
      </div>
    </div>
  )
};

export default Sidebar;
