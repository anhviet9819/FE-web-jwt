import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Header from "../../components/Header";
import hosoApi from "../../api/hosoApi";
import AuthService from "../../services/auth.service";
import bacsiApi from "../../api/bacsiApi";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

function Dangkykham() {
  const [date, setDate] = useState(new Date());
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
          <div class="find-doctor-right">
            <br />
            <div class="user-navigate">
              <h3> Vui lòng chọn bác sĩ</h3>
            </div>
            <div class="table-responsive find-doctor-right-cont table-hover">
              <table class="table table-striped shadow-2">
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>H.hàm,h.vị</th>
                    <th>Họ và tên</th>
                    <th>Chuyên môn</th>
                    <th>Khoa</th>
                    <th>Cơ sở y tế</th>
                    <th>Tỉnh</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bacsiList.map((elementDetail, index) => {
                    return (
                      <tr>
                        <td>{elementDetail.ten}</td>
                        <td>{elementDetail.trinhdo}</td>
                        <td>{elementDetail.chuyenkhoa}</td>
                        <td>{elementDetail.khoa.ten}</td>
                        <td>{elementDetail.khoa.cosoyte.ten}</td>
                        <td>{elementDetail.khoa.cosoyte.tinh.ten}</td>
                        <td>
                          <Flatpickr
                            value={date} // giá trị ngày tháng
                            // các option thêm cho thư viện
                            options={{
                              dateFormat: "d-m-Y H:m", // format ngày giờ
                              enableTime: true
                            }}
                            // event
                            onChange={(dateSelect) => setDate(dateSelect)}
                          />{" "}
                        </td>
                        <Link className="btn btn-info" to="/xacnhandangky">
                          Chọn ngày
                        </Link>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dangkykham;
