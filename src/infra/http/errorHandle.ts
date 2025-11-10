import axios from "axios";
import { AxiosError } from "axios";


export type ErrorResponseType = {
  messageCode: string;
  values: string | string[];
  message?: string;
};

export type OptType = {
  resource: string;
};


const errorMessage = {
  400: (opt: OptType) => `NOT FOUND: ${opt?.resource || "DATA"}`,
  401: () => "MESSAGE_ERROR_401",
  500: () => "SYSTEM ERROR, RETRY LATER!",
};

export const handleApiError = (error: AxiosError<ErrorResponseType>, opt: OptType) => {
  if (axios.isAxiosError(error)) {
    const status = error.response.status ?? 0;
    const messageFn = errorMessage[status];
    if (messageFn) throw new Error(messageFn(opt));

    throw new Error(`An error occurred (Code ${status})`);
  }
  throw new Error("Unknown error.");
};
