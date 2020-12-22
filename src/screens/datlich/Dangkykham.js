import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Header from "../../components/Header";
import hosoApi from "../../api/hosoApi";
import AuthService from "../../services/auth.service";
import bacsiApi from "../../api/bacsiApi";

function Dangkykham() {
  const [bacsiList, setBacsiList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        //const params = { _page: 1, _limit: 10 };
        const response = await bacsiApi.getAll();
        console.log("Fetch products successfully: ", response);
        setBacsiList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div id="navigation-bar">
          <div class="container">
            <Link to="/" class="nav-bar-homepage">
              TRANG CHỦ
            </Link>
            {">"} ĐẶT KHÁM
          </div>
          <div>
            <p>Tên | Trình độ | Chuyên môn | Khoa | Cơ sở y tế | Tỉnh</p>
            {bacsiList.map((elementDetail, index) => {
              return (
                <div>
                  <div>
                    {elementDetail.ten}|{elementDetail.trinhdo}|
                    {elementDetail.chuyenkhoa}|{elementDetail.khoa.ten}|
                    {elementDetail.khoa.cosoyte.ten}|
                    {elementDetail.khoa.cosoyte.tinh.ten}
                    <Link>
                      Chọn ngày
                    </Link>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dangkykham;
