import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login, register } from "../api/apis/auth";

// 회원가입
export const useRegisterMutation = () => {
  return useMutation(register, {
    onSuccess(res) {
      console.log("res: ", res);
    },
    onError(err) {
      console.log("err: ", err);
    },
  });
};

// 로그인
export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess(res) {
      console.log("res: ", res.data.data);
      sessionStorage.setItem("token", res.data.data.access_token);
      navigate("/home");
    },
    onError(err) {
      console.log("err: ", err);
    },
  });
};
