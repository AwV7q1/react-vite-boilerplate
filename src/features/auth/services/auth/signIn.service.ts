import axiosInstance from "@infra/http/axiosInstance.js";
import { AxiosResponse } from "axios";

type ParamsType = {
  user_name: string;
  password: string;
};
export const signIn = async (params: ParamsType): Promise<AxiosResponse> => {
  const url = "/auth/login";
  return await axiosInstance.post(url, {
    params,
  });
};
