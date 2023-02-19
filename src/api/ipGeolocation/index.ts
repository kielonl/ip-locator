import { callApi } from "../callApi";
import { HTTP_METHOD } from "@/constants";

const ipApiUrl = import.meta.env.VITE_IP_API_URL;
const IpApiKey = import.meta.env.VITE_IP_API_KEY;

export const getIpInfo = async (ip: string) => {
  const data = await callApi(
    HTTP_METHOD.GET,
    `${ipApiUrl}apiKey=${IpApiKey}&ipAddress=${ip}`
  );
  return data;
};
