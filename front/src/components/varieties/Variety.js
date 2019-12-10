import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../App";

class Variety extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="color4 tittle">OUR FLAVORS</h2>
        <div className="divider" />

        <div className="container-fluid">
          <div className="variety-three-items-row">
            <div className="variety-card variety-card1">
              <h4>Zucchini and Spinach</h4>
              <div className="zucchiniAndSpinach" />
              <p className="variety-p-text">
                Did you know that the Spinach is good to restore energy and
                increase vitality? This Sopita is a good source of Vitamin A, C
                and K.
              </p>
              <ul className="variety-list">
                <p className="variety-p-text-2">Principal Ingredients:</p>
                <li className="variety-p-text-2">Zucchinis</li>
                <li className="variety-p-text-2">Spinach</li>
                <li className="variety-p-text-2">Potatoes</li>
              </ul>
            </div>
            <div className="variety-card variety-card2">
              <h4>Beet and Ginger</h4>
              <div className="beetAndGinger" />
              <p className="variety-p-text">
                Did you know that beets have many impressive health benefits
                such as maintain a healthy blood pressure and improving athletic
                performance? This Sopita is a good source of Folate and
                Potassium.
              </p>
              <ul className="variety-list">
                <p className="variety-p-text-2">Principal Ingredients:</p>
                <li className="variety-p-text-2">Beets</li>
                <li className="variety-p-text-2">Potatoes</li>
                <li className="variety-p-text-2">Ginger</li>
              </ul>
            </div>
            <div className="variety-card variety-card3">
              <h4>Squash and Sweet Potato</h4>
              <div className="squashAndSweetPotato" />
              <p className="variety-p-text">
                Did you know that squash can boost your immune system and is a
                high antioxidant? This Sopita is a good source of Vitamin A, C
                and Fiber.
              </p>
              <ul className="variety-list">
                <p className="variety-p-text-2">Principal Ingredients:</p>
                <li className="variety-p-text-2">Squash</li>
                <li className="variety-p-text-2">Potatoes</li>
                <li className="variety-p-text-2">Ginger</li>
              </ul>
            </div>
          </div>

          <div className="btn-container">
            <Link to={"/order"} className="orderButton">
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Variety;
