import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuthStore } from "@shared/store/useAuthStore/index.js";
import { useMutation } from "@tanstack/react-query";

import { signIn } from "@features/auth/services/auth/signIn.service";

const UseSignIn = () => {
  const setLogin = useAuthStore((state) => state.setLogin);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const { mutate: mutateLogin, isPending: pendingLogin } = useMutation({
    mutationFn: signIn,
    onSuccess: (data: any) => {
      console.log("data", data);
      setLogin(data.token, data.token); // accessToken, refreshToken
      navigate("/");
    },
    onError: (error) => {
      setErrorMessage(error.message);
      toast(error.message);
    },
  });

  return { mutateLogin, pendingLogin, errorMessage };
};

export default UseSignIn;
