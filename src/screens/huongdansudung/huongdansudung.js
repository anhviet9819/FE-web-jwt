import React from 'react';
import { Link } from "react-router-dom";
import "./huongdansudung.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import app_store from "./images/app-store-badge-black.svg";
import google_btn from "./images/stork-google-btn.svg";
import img1 from "./images/1a.jpg";

function Lienhe() {
    return (
    <div>
        <title>Medpro - Đăng ký khám bệnh online</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/smoothness/jquery-ui.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="https://umc.medpro.com.vn/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" href="/asset/styles/font-awesome/fontawesome-all.css" />
        <title>Document</title>
        <Header />

        <div>
        <div className="main">
          <div className="help-use">
            <div className="bg-parallax">
              <h1 className="parallax-text">
                Hướng dẫn
                <span>Đăng ký khám bệnh</span>
                <br /> Và
                <span>thanh toán qua ứng dụng </span>
              </h1>
              <p className="tag-name">UMC - Đăng ký khám bệnh Online </p>
              <p className="download-hdh">
                <Link to="https://itunes.apple.com/us/app/umc-dang-ky-kham-benh-online/id1427830275?ls=1&mt=8" title="Download App Store" target="_blank">
                  <img src={app_store} />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=vn.pkh.medpro" title="Download Google Play" target="_blank">
                  <img src={google_btn} />
                </Link>
              </p>
            </div>
            <div className="container manual-page ">
              <div className="row">
                <div className="col-md-12">
                  <div className="manual-content">
                    <div class="margin_fix">
                    <ul className="tabs-help-user nav nav-tabs">
                      <li className="nav-item">
                        <Link className="active android nav-link">
                          <i className="fab fa-android" /> Android
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link">
                          <i className="fab fa-apple" /> IOS
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="thanhtoan nav-link">
                          <i className="far fa-credit-card" /> Thanh toán
                        </Link>
                      </li>
                    </ul>
                    </div>
                    <div>
                    <ul className="tab-content">
                      <div className="tab-pane active">
                        <div className="row-mobile row">
                          <div className="col-12 col-sm-12 col-md-6">
                            <div className="manual-device">
                              <div className="bg-iphone" />
                              <div className="carousel-slide">
                                <div id="demo" className="carousel slide" data-ride="carousel" data-interval="false">
                                  {/* Indicators */}
                                  <ol className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to={0} className="1 active" />
                                    <li data-target="#demo" data-slide-to={1} className={2} />
                                    <li data-target="#demo" data-slide-to={2} className={3} />
                                    <li data-target="#demo" data-slide-to={3} className={4} />
                                    <li data-target="#demo" data-slide-to={4} className={5} />
                                    <li data-target="#demo" data-slide-to={5} className={6} />
                                    <li data-target="#demo" data-slide-to={6} className={7} />
                                    <li data-target="#demo" data-slide-to={7} className={8} />
                                  </ol>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img src={img1} width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/2.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/3.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/4.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/6.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/7.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/8.jpg" width={1100} height={500} />
                                    </div>
                                    <div className="carousel-item">
                                      <img src="../images/9.jpg" width={1100} height={500} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6">
                            <ol className="list-number-tab android">
                              <li className="active">
                                <div className="number fix-color">
                                  <span class>1</span>
                                </div>
                                <div className="content">
                                  <div className="title fix-textcolor">Đăng nhập tài khoản</div>
                                  <div className="description">
                                  </div>
                                </div>
                              </li>
                              <li className>
                                <div className="number">
                                  <span>2</span>
                                </div>
                                <div className="content">
                                  <div className="title"> Chọn đặt lịch khám</div>
                                  <div className="description">
                                    <p>Từ màn hình chính, BN chọn</p>
                                    <p>
                                      <span className="btn-dk">
                                        <i className="fal fa-stethoscope mr-1" />
                                        Đặt lịch khám
                                      </span>
                                    </p>
                                    <p>Sau đó chọn 1 trong 2 dịch vụ</p>
                                    <ul className="list-des-help">
                                      <li>Đặt khám theo ngày</li>
                                      <li>Đặt khám theo bác sĩ</li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className>
                                <div className="number">
                                  <span>3</span>
                                </div>
                                <div className="content">
                                  <div className="title">Tạo hồ sơ bệnh nhân</div>
                                  <div className="description">
                                    <p>
                                      "BN có thể sử dụng Số Hồ Sơ đã có, hoặc tạo mới Hồ Sơ BN bằng cách chọn 1 trong 2 dịch vụ:"
                                    </p>
                                    <ul className="list-des-help">
                                      <li>- Đã từng khám, nhập Hồ Sơ</li>
                                      <li>- Chưa từng khám, tạo Hồ Sơ mới</li>
                                    </ul>
                                    <p>
                                      *MSBN được in trên phiếu khám bệnh, phiếu xuất viện, phiếu thanh toán ...
                                    </p>
                                    <p>
                                      "vd: "
                                      <strong>N18-0060xx</strong> ","
                                      <strong>B08-0060xx</strong>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className>
                                <div className="number">
                                  <span>4</span>
                                </div>
                                <div className="content">
                                  <div className="title">Chọn thông tin khám</div>
                                  <div className="description">
                                    <p>
                                      <span className="underline-des ">Đặt khám theo bác sĩ</span>
                                    </p>
                                    <ul className="list-des-help">
                                      <li>- Chọn bác sĩ</li>
                                      <li>- Chọn ngày khám và giờ khám</li>
                                    </ul>
                                    <p>
                                      <span className="underline-des ">Đặt khám theo ngày</span>
                                    </p>
                                    <ul className="list-des-help">
                                      <li>- Chọn ngày khám</li>
                                      <li>- Chọn chuyên khoa</li>
                                      <li>- Chọn bác sĩ và giờ khám</li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className>
                                <div className="number">
                                  <span>5</span>
                                </div>
                                <div className="content">
                                  <div className="title">Chọn BHYT</div>
                                  <div className="description">
                                    <p>
                                      Chọn hình thức
                                      <span className="red font-weight-bold">BHYT</span>
                                    </p>
                                    <p>BV DHYD chỉ chấp nhận 2 trường hợp có bảo hiểm</p>
                                    <ul className="list-des-help">
                                      <li>- Có giấy chuyển tuyến BHYT đúng tuyến BV ĐHYD</li>
                                      <li>- Tái khám theo hẹn trên toa thuốc BHYT của ĐHYD</li>
                                    </ul>
                                    <p style={{fontStyle: 'italic'}}>Các trường hợp còn lại, sẽ không được hưởng BHYT tại BV ĐHYD</p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="number">
                                  <span>6</span>
                                </div>
                                <div className="content">
                                  <div className="title">Xác nhận thông tin</div>
                                  <div className="description">
                                    <p>Xác nhận lại thông tin đã đăng ký</p>
                                    <p style={{fontStyle: 'italic'}}>
                                      Ở bước này : BN có thể chọn "Đăng ký thêm chuyên khoa", để đặt khám thêm 1 chuyên khoa khác .
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="number">
                                  <span>7</span>
                                </div>
                                <div className="content">
                                  <div className="title">Thanh toán</div>
                                  <div className="description">
                                    <p>Chọn 1 trong các hình thức thanh toán và thực hiện thanh toán</p>
                                    <ul className="list-choose-bank">
                                      <li>
                                        Thanh toán bằng thẻ khám bệnh
                                        <i className="fal fa-long-arrow-right mr-2" />
                                      </li>
                                      <li>
                                        Thanh toán bằng Thẻ quốc tế Visa, Master, JCB
                                        <i className="fal fa-long-arrow-right mr-2" />
                                      </li>
                                      <li>
                                        Thanh toán bằng Thẻ ATM nội địa / Internet Banking
                                        <i className="fal fa-long-arrow-right mr-2" />
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>
                                        *Đối với ATM nội địa &amp; Thẻ khám bệnh cần phải kích hoạt internet banking để thanh toán
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className>
                                <div className="number">
                                  <span>8</span>
                                </div>
                                <div className="content">
                                  <div className="title">Xác nhận ĐKKB thành công</div>
                                  <div className="description">
                                    <p>
                                      Sau khi thanh toán thành công, bệnh nhân sẽ nhận được phieus khám bệnh với thông tin đã đăng ký (Trên phần mềm, email &amp; tin nhắn SMS)
                                    </p>
                                    <p>
                                      Trường hợp bị trừ tiền nhưng không nhận được phiếu khám bệnh, vui lòng liên hệ tổng đài:
                                      <Link to="tel:19002267" title={19002267} className="color-bank ml-2 font-weight-bold">1900-2267</Link>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <footer className="footer">
        <Footer/>
      </footer>
      </div>
    </div>
    )
}

export default Lienhe