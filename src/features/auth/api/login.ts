import api from "@/shared/api/axios";

const googleLogin = async (token: string) => {
  const { data } = await api.post("/auth/oauth/google", { token });
  return data;
};

export { googleLogin };
