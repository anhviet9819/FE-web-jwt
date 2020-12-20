import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import './mau.css';

export class Chonhoso extends Component {
  render() {
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
                    <div className="group">
                      <h2 className="clearfix">CHỌN HỒ SƠ BỆNH NHÂN</h2>
                      <div className="hr"></div>
                      <div className="sep_clearfix">
                        <i className="fas fa-user-plus"></i>
                        <Link to="/">Đặt cho bệnh nhân khác</Link>
                      </div>
                      <div className="sep_clearfix">
                        <i className="fas fa-user-plus"></i>
                        <Link to="/">Đặt cho bệnh nhân khác</Link>
                      </div>
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
      </>
    );
  }
}

export default Chonhoso;
