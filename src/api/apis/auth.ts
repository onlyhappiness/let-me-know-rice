import api from "..";
import { IRegister, ISignIn } from "../../@types/auth";

// 회원가입
export const register = (req: IRegister) => {
  const res = api.post(`/auth/register`, req);

  return res;
};

// 로그인
export const login = (req: ISignIn) => {
  const res = api.post(`/auth/login`, req);

  return res;
};

// 로그인 정보 조회
export const loginInfo = () => {
  const res = api.get(`/auth/login`);

  return res;
};
