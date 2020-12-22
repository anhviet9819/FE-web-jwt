import axiosClient from "./axiosClient";

// api/productApi.js
const cosoyteApi = {
  getAll : (params) => {
    const url = `/cosoyte/search`;
    return axiosClient.get(url, { params });
  },

  getOne : (cosoyteid) => {
    const url = `/cosoyte/details/${cosoyteid}`;
    return axiosClient.get(url);
  },
  
  deleteTinh : (cosoyteid) => {
    const url = `/cosoyte/${cosoyteid}`;
    return axiosClient.delete(url);
  },

  getCosoyteByTinhid : (tinhid) => {
    const url = `/cosoyte/${tinhid}`;
    return axiosClient.get(url);
  }
  
}

export default cosoyteApi;


