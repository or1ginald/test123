import React, { memo } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Employees, NotFound, Payments } from '../../pages';
import New from '../../pages/new/New';
import { ContainerForTable } from '../ContainerForTable';
import { Customers } from '../Customers';
import { Login } from '../login/Login';
import { Profile } from '../Profile';
import { Projects } from '../Projects';
import { Reports } from '../Reports';

import { Products } from 'components/Products';
import { productInputs } from 'formSource';

export const RoutesComponent = memo(() => (
  <Routes>
    <Route path="/" element={<Navigate to="/employees" />} />
    <Route path="/products" element={<Products />} />
    <Route path="/" element={<Employees />}>
      <Route index element={<ContainerForTable />} />
      <Route path=":employeeId" element={<Payments />} />
      <Route
        path="new"
        element={<New inputs={productInputs} title="Add New Product" />}
      />
    </Route>
    <Route path="/projects" element={<Projects />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="404" />} />
    <Route path="404" element={<NotFound />} />
  </Routes>
));
