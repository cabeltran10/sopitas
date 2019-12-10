import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App";

import SquashBanner from "./banners/SquashBanner";

import snack from "../img/icons/snack.png";
import workout from "../img/icons/workout.png";
import meal from "../img/icons/meal.png";
import flavours from "../img/icons/plan.png";
import delivery from "../img/icons/deliver.png";
import cook from "../img/icons/microwave.png";
import plan1 from "../img/plans/plan-1.png";
import plan2 from "../img/plans/plan-2.png";
import plan3 from "../img/plans/plan-3.png";
import greenSoup from "../img/sopitas/green-soup.jpg";

class Information extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="color4 center">WHAT IS SOPITAS?</h2>
        <div className="divider"></div>
        <div className="two-row-banner">
          <img
            src={greenSoup}
            alt="Sopitas history image"
            className="banner-img"
          />
          <p className="p-text center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            commodi, laudantium tenetur fugiat id magni totam mollitia
            asperiores aliquam molestias porro, aspernatur illo quos sunt veniam
            perferendis consequatur quod obcaecati?
          </p>
        </div>

        <h2 className="color4 center">WHEN TO EAT SOPITAS?</h2>
        <div className="divider"></div>
        <div className="three-items-row">
          <div className="card card1">
            <img src={snack} alt="Snack icon" className="card-img-top icon" />
            <div className="card-body">
              <p>As a snack</p>
            </div>
          </div>
          <div className="card card2">
            <img
              src={workout}
              alt="Workout icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <p>Before or after workout</p>
            </div>
          </div>
          <div className="card card3">
            <img src={meal} alt="Meal icon" className="card-img-top icon" />
            <div className="card-body">
              <p>Starter or part of your main course meal</p>
            </div>
          </div>
        </div>

        <SquashBanner />

        <h2 className="color4 center">HOW IT WORKS?</h2>
        <div className="divider"></div>
        <div className="three-items-row">
          <div className="card card1">
            <img
              src={flavours}
              alt="Flavours icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <p>
                Choose your plan, order your favorite flavours and delivery
                frequency
              </p>
            </div>
          </div>
          <div className="card card2">
            <img
              src={delivery}
              alt="Delivery icon"
              className="card-img-top icon"
            />
            <div className="card-body">
              <p>We deliver weekly to your door. Freeze at your reception</p>
            </div>
          </div>
          <div className="card card3">
            <img src={cook} alt="Cook icon" className="card-img-top icon" />
            <div className="card-body">
              <p>
                Warm 4 - 5 microwave or 15 mins stove and enjoy at any time of
                your day
              </p>
            </div>
          </div>
        </div>

        <h2 className="color4 center">OUR PLANS</h2>
        <div className="divider"></div>
        <div className="three-items-row">
          <div className="card card1">
            <img src={plan1} alt="Plan 1" className="card-img-top" />
          </div>
          <div className="card card2">
            <img src={plan2} alt="Plan 2" className="card-img-top" />
          </div>
          <div className="card card3">
            <img src={plan3} alt="Plan 3" className="card-img-top" />
          </div>
        </div>
        <div className="order-now-button">
          <Link to={"/order"} className="orderButton">
            ORDER NOW
          </Link>
        </div>
      </div>
    );
  }
}

export default Information;
