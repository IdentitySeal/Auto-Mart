import axios, { AxiosResponse } from "axios";




export interface IRequest {
  url: string;
  method?: 'POST' | 'PUT' | 'DELETE' | 'GET';
  data?: any;
  headers?: Record<string, string>;
}
export const makeRequest = async <T>({
  url,
  method,
  data,
  headers,
}: IRequest): Promise<AxiosResponse<T, any> | undefined> => {
  try {
    method = method ?? "GET";
    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new Error("An error occurred");
  } catch (error:any) {
    throw new Error(error);
  }
};