import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backURL = "http://sopitas-app.herokuapp.com";
    return (
      <div className="container-fluid sticky-top">
        <div className="navbar-row">
          <nav className="navbar">
            <Link to={"/"} className="navbar-brand">
              Sopitas
            </Link>
            {this.props.user?(
            <Link to={"/order"} className="nav-link">
              ORDER
            </Link>):(<a></a>)
            }
            <Link to={"/varieties"} className="nav-link">
              VARIETIES
            </Link>
            <Link to={"/ourHistory"} className="nav-link">
              OUR HISTORY
            </Link>
            {this.props.user ? (
              <Link to={"/myOrders"} className="nav-link">
                MY ORDERS
              </Link>
            ) : (
              <a></a>
            )}
            {!this.props.user ? (
              <a className="nav-link" href={`${backURL}/auth/google`}>
                LOGIN WITH GOOGLE
              </a>
            ) : (
              <a className="nav-link" href={`${backURL}/auth/logout`}>
                <img
                  className="profile-img"
                  src={this.props.user.image}
                  alt="Profile picture"
                />
                LOGOUT
              </a>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
