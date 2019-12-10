import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App";

class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid jumbotron">
        <div className="jumbotronText">
          <h3>Nutritious food for your busy lifestyle</h3>
        </div>
        <div className="jumbotronButton">
          <Link to={"/order"} className="orderButton">
            ORDER NOW
          </Link>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
