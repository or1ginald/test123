import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

/* type ProtectedRoutesPropsType = {
  isAuth: boolean;
}; */

export const ProtectedRoutes: FC = () => <Outlet />;
