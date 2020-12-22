// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import AuthService from "../services/auth.service";

const getToken = async() => {
    const currentUser = AuthService.getCurrentUser()
    if(currentUser){
        console.log('nice')
        return currentUser.accessToken;
    } 

    const hasRememberedAccount = localStorage.getItem("user");
    if(!hasRememberedAccount){
        console.log("nguoi");
        return null;
    } 

    return null;
}
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
//   const currentUser = AuthService.getCurrentUser()
//   if(currentUser){
//       const token = await currentUser.accessToken
//       config.headers.Authorization = `Bearer ${token}`
//   }

    const token = await getToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
