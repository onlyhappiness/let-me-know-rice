import axios from "axios";

export const getApiHost = () => {
  if (process.env.NODE_ENV === "development") return "http://localhost:4000";
  //   return process.env.REACT_APP_API_HOST;
};

const api = axios.create({
  baseURL: getApiHost(),
});

export default api;

api.interceptors.request.use((request: any) => {
  let token = sessionStorage.getItem("token");

  if (!request.headers.Authorization) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
