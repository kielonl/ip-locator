import type { HTTP_METHOD } from "@/constants";
import axios from "axios";

export const callApi = async (
  HTTPMethod: HTTP_METHOD,
  url: string,
  data?: any
): Promise<any> => {
  try {
    return await axios({
      method: HTTPMethod,
      url,
      data,
    });
  } catch (error) {
    return error;
  }
};
