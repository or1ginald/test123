import { employeesApi } from '../../api/crmAPI';
import { handleServerNetworkError } from '../../utils';
import { AppThunk } from '../index';

import { setAppStatusAC } from './authReducer';

type UserType = {
  id: string;
  employee: string;
  inn: string;
  jiraId: string;
  customer: string;
  workTime: string;
};
// ФИО = full_name
// ИНН = inn
// jiraid = id
// заказчик = вместо него выводим position
// Плановые трудозатраты = project_name + hour

const initialState: Array<UserType> = [];

export type ActionTypeEmployee = ReturnType<typeof setEmployeeAC>;

export const employeeReducer = (
  state: Array<UserType> = initialState,
  action: ActionTypeEmployee,
): Array<UserType> => {
  switch (action.type) {
    case 'EMPLOYEE/SET-EMPLOYEE':
      return action.employees.map(employee => employee);
    default:
      return state;
  }
};
export const setEmployeeAC = (employees: Array<UserType>) =>
  ({
    type: 'EMPLOYEE/SET-EMPLOYEE',
    employees,
  } as const);

export const setEmployeeTС = (): AppThunk => async dispatch => {
  dispatch(setAppStatusAC('loading'));
  try {
    const res = await employeesApi.getEmployees();
    console.log(res);
  } catch (e: any) {
    handleServerNetworkError(e, dispatch);
  } finally {
    dispatch(setAppStatusAC('success'));
  }
};
