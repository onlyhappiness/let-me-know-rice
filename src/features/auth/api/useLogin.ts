import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "./login";

const useGoogleLogin = () => {
  const mutationFn = (token: string) => googleLogin(token);
  return useMutation({ mutationFn });
};

export { useGoogleLogin as useGoogleOAuth };
