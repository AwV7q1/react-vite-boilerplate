import axiosInstance from "@infra/http/axiosInstance.js";
import {handleApiError} from "@infra/http/errorHandle.js";

export const generateQR = async ({amount, content}) => {
  try {
    const url = `/auth/get-qr?amount=${amount}&content=${content}`;

    return await axiosInstance.get(url, {
      responseType: "blob",
    });

  } catch (error) {
    handleApiError(error, {resource: `Can't generate QR with amount:${amount} and content:${content}`});
  }
}