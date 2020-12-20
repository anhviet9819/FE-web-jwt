import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export class Dangkykham extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="main">
          <div id="navigation-bar">
            <div class="container">
              <Link to="/" class="nav-bar-homepage">
                TRANG CHỦ
              </Link>
              {'>'} ĐẶT KHÁM
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dangkykham;
