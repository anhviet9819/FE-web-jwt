import axiosClient from "./axiosClient";

// api/productApi.js
const khoaApi = {
  getAll : (params) => {
    const url = `/khoa/search`;
    return axiosClient.get(url, { params });
  },

  getOne : (khoaid) => {
    const url = `/khoa/details/${khoaid}`;
    return axiosClient.get(url);
  },
  
  deleteBacsi : (khoaid) => {
    const url = `/khoa/${khoaid}`;
    return axiosClient.delete(url);
  },

  getKhoaByCosoyteid : (cosoyteid) => {
    const url = `/khoa/details/${cosoyteid}`;
    return axiosClient.get(url);
  },

}

export default khoaApi;


