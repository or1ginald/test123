import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '7ccc0386-8558-4e56-b3f7-82cd09cd2d3e',
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
