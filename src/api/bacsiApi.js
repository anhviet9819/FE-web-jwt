import axiosClient from "./axiosClient";

// api/productApi.js
const bacsiApi = {
  getAll : (params) => {
    const url = `/bacsi/search`;
    return axiosClient.get(url, { params });
  },

  getOne : (bacsiid) => {
    const url = `/bacsi/details/${bacsiid}`;
    return axiosClient.get(url);
  },
  
  deleteBacsi : (bacsiid) => {
    const url = `/bacsi/${bacsiid}`;
    return axiosClient.delete(url);
  },

  getBacsiByKhoaid : (khoaid) => {
    const url = `/bacsi/details/${khoaid}`;
    return axiosClient.get(url);
  },

  
}

export default bacsiApi;


