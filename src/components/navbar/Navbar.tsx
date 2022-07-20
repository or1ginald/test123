import './navbar.scss';
import React, { FC } from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch, useSelector } from 'react-redux';

import { getIsDarkMode } from 'store';
import { setIsDarkModeAC } from 'store/reducers';
import { RootStateType } from 'store/types';

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);
  const login = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn);

  if (!login) {
    return null;
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              sx={{ cursor: 'pointer' }}
              onClick={() => dispatch(setIsDarkModeAC(!isDarkMode))}
            />
          </div>
          <div className="item">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8087f76f4717af024ed22e9d9f96206"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
