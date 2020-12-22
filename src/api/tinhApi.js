import axiosClient from "./axiosClient";

// api/productApi.js
const tinhApi = {
  getAll : (params) => {
    const url = `/tinh/search`;
    return axiosClient.get(url, { params });
  },

  getOne : (tinhid) => {
    const url = `/tinh/details/${tinhid}`;
    return axiosClient.get(url);
  },
  
  deleteTinh : (tinhid) => {
    const url = `/tinh/${tinhid}`;
    return axiosClient.delete(url);
  },

  
}

export default tinhApi;


