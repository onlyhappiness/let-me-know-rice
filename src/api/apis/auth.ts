import api from "..";
import { IRegister, ISignIn } from "../../@types/auth";

// 회원가입
export const register = async (req: IRegister) => {
  const res = await api.post(`/auth/register`, req);

  return res;
};

// 로그인
export const login = async (req: ISignIn) => {
  const res = await api.post(`/auth/login`, req);

  return res;
};

// 로그인 정보 조회
export const loginInfo = async () => {
  const res = await api.get(`/auth/login`);

  return res;
};
