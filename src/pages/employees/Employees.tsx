import './employees.scss';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootStateType } from 'store/types';

export const Employees: FC = () => {
  const login = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn);
  if (!login) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="datatable">
      {/* <div className="datatableTitle"> */}
      {/*  Сотрудники */}
      {/*  <Link to="/employees/new" className="link"> */}
      {/*    Добавить нового сотрудника */}
      {/*  </Link> */}
      {/* </div> */}
      <Outlet />
    </div>
  );
};
