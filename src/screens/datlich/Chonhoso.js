import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./mau.css";
import hosoApi from "../../api/hosoApi";
import AuthService from "../../services/auth.service";

export default function Chonhoso() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        //const params = { _page: 1, _limit: 10 };
        const response = await hosoApi.getOneByTaikhoanid(AuthService.getCurrentUser().id);
        console.log("Fetch products successfully: ", response);
        setProductList([response]);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <>
      <div className="main">
        <div>
          <div className="container">
            <Header />
          </div>
          <div id="navigation-bar">
            <div className="container">
              <Link to="/" className="nav-bar-homepage">
                TRANG CHỦ
              </Link>
              {/* <i class="fas fa-angle-right"></i> */}
              <Link class="active">{">"} CHỌN HỒ SƠ BỆNH NHÂN</Link>
            </div>
          </div>
          <div id="section-infor-13">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-6 mx-md-auto">
                  <div className="group ">
                    <h2 className="clearfix">CHỌN HỒ SƠ BỆNH NHÂN</h2>
                    <div className="hr"></div>
                    <div className="sep_clearfix">
                      <div className="group-results group-results-13 d-flex active">
                        {productList.map((elementDetail, index) => {
                          return (
                            <div className="gr gr-info text-left ">
                              <div className="gr-name d-plex">
                                <h2>{elementDetail.ten}</h2>
                              </div>
                              <div className="gr-name-1">
                                Ngày sinh: {elementDetail.ngaysinh}
                              </div>
                              <div className="gr-name-1">
                                Địa chỉ: {elementDetail.diachi}
                              </div>
                              <div className="gr-name-1">
                                CMND: {elementDetail.cmnd}
                              </div>
                              <div className="gr-name-1">
                                Nơi cấp: {elementDetail.noicap}
                              </div>
                              <div className="gr-name-1">Giới tính: Nam</div>
                              <div className="gr-name-1">
                                Sở thích: Đá bóng, billards
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-lg-7 col-md-7 ml-auto">
                                  <div className="gr-editor ">
                                    <ul>
                                      <li>
                                        <Link
                                          class="gr-editor-choose"
                                          to="/dangkykham"
                                        >
                                          <i className="fas fa-pen-square"></i>
                                          Sửa
                                        </Link>
                                      </li>
                                      <li>|</li>
                                      <li>
                                        <Link
                                          class="gr-editor-choose"
                                          to="/dangkykham"
                                        >
                                          <i className="fas fa-times-circle"></i>
                                          Xoá
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-5 col-md-5 ml-auto">
                                    <Link to="/dangkykham">Tiếp tục</Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="group-dashed group-dashed-info text-center">
                      <i className="fas fa-user-plus"></i>
                      <Link to="/">Đặt cho bệnh nhân khác</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="guide-line">
              <div className="container">
                <div>
                  Chọn: <b>Hồ sơ bệnh nhân</b> <b>Tiếp tục</b>.
                </div>
                <div>
                  Nếu danh sách không có hồ sơ phù hợp, vui lòng chọn{" "}
                  <b>Đặt cho bệnh nhân khác.</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
