import axiosClient from "./axiosClient";

// api/productApi.js
const hosoApi = {
  getAll : (params) => {
    const url = `/benhnhan/search`;
    return axiosClient.get(url, { params });
  },

  getOne : (benhnhanid) => {
    const url = `/benhnhan/details/${benhnhanid}`;
    return axiosClient.get(url);
  },
  
  deleteBenhnhan : (benhnhanid) => {
    const url = `/benhnhan/${benhnhanid}`;
    return axiosClient.delete(url);
  }
}

export default hosoApi;


