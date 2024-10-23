import { Button } from "@/shared/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleOAuth } from "../api/useLogin";

const GoogleLoginButton = () => {
  const { mutate: googleLogin } = useGoogleOAuth();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      googleLogin(tokenResponse.access_token);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <Button onClick={() => login()}>
      <span className="text-black">Sign in with Google</span>
    </Button>
  );
};

export default GoogleLoginButton;
