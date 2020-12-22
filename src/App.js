import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./screens/dangnhap/login.component";
import Register from "./screens/dangky/register.component";
import Profile from "./screens/hoso/profile.component";
import BoardUser from "./components/board-user.component";
import Thacmac from "./screens/thacmac/Thacmac";
import Quytrinh from "./screens/quytrinh/Quytrinh";
import index from "./screens/index/index";
import Gioithieu from "./screens/gioithieu/Gioithieu";
import Dangkykham from "./screens/datlich/Dangkykham";
import Chonhoso from "./screens/datlich/Chonhoso";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand">
          {/* <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div> */}

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route exact path={["/", "/home"]} component={index} />
            <Route exact path="/thacmac" component={Thacmac} />
            <Route exact path="/gioithieu" component={Gioithieu} />
            <Route exact path="/quytrinh" component={Quytrinh} />
            {/* <Route exact path="/datlich" component={Dangkykham} /> */}
            <Route exact path="/chonhoso" component={Chonhoso} />
            <Route exact path="/dangkykham" component={Dangkykham} />
            <Route path="/user" component={BoardUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
