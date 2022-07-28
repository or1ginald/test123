import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL_AUTH,
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_AUTH_KEY as string,
  },
});

const NULL = 0;
type CommonResponseType<T = {}> = {
  resultCode: number;
  messages: string[];
  fieldsErrors: string[];
  data: T;
};

enum ServerResponseResultCode {
  success = 0,
  error = 1,
  captcha = 10,
}
export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};
export const authApi = {
  createLogin(data: LoginParamsType) {
    return instance
      .post<LoginParamsType, AxiosResponse<CommonResponseType<{ userId: number }>>>(
        `/auth/login`,
        data,
      )
      .then(res => {
        if (res.data.resultCode !== ServerResponseResultCode.success) {
          throw new SyntaxError(res.data.messages[NULL]);
        } else return res;
      });
  },
  deleteLogin() {
    return instance.delete<CommonResponseType>(`/auth/login`).then(res => {
      if (res.data.resultCode !== ServerResponseResultCode.success) {
        throw new SyntaxError(res.data.messages[NULL]);
      } else return res;
    });
  },
  authMe() {
    return instance
      .get<CommonResponseType<{ id: number; email: string; login: string }>>(`/auth/me`)
      .then(res => {
        if (res.data.resultCode !== ServerResponseResultCode.success) {
          throw new SyntaxError(res.data.messages[NULL]);
        } else return res;
      });
  },
};

const instanceData = axios.create({
  baseURL: 'https://crm.dcloud.tech/',
  withCredentials: true,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer d028b61897ea2915e9a83c7cfe5795b3',
  },
});

export const employeesApi = {
  getEmployees() {
    return instanceData.get<any>(`plan`).then(res => {
      if (res.data.resultCode !== ServerResponseResultCode.success) {
        throw new SyntaxError(res.data.messages[NULL]);
      } else return res;
    });
  },
};
