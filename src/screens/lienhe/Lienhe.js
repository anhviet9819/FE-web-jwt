import React from 'react'
import "./Lienhe.css"
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import banner from "./img/capture.PNG"
function Lienhe() {
    return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Medpro - Đăng ký khám bệnh online</title>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <div className="page-wrap">
          <Header />
          <section className="main">
            <div className="inform">
              <div className="container">
                <div className="banner">
                  <img src={banner} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="navigation-bar" className="bg-white">
            <div className="container">
              <a href className="nav-bar-homepage">TRANG CHỦ</a>
              <i className="fas fa-angle-right" />
              <a href className="active">QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH THEO HẸN</a>
              <hr className="my-0" />
            </div>
        </div>
        
        <center>
        <div class="margin">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Họ tên</label>
          <div class="form_sizing">
          <input type="text" className="form-control" id="name" placeholder="Nhập tên" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <div class="form_sizing">
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Số điện thoại</label>
          <div class="form_sizing">
          <input type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nội dung</label>
          <div class="form_sizing">
          <input type="text" className="form-control" id="information" placeholder="Nhập nội dung" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Gửi</button>
        </div>
        </center>
        <footer className="footer">
        <Footer/>
      </footer>
    </div>
    )
}

export default Lienhe