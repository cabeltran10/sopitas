import React, { useState, useEffect } from "react";
import axios from "axios";
import Flavor from "../components/Flavor";

import plan1 from "../img/plans/plan-1.png";
import plan2 from "../img/plans/plan-2.png";
import plan3 from "../img/plans/plan-3.png";

import MyOrders from "../components/MyOrders";

const BuyForm = props => {
  const [flavors, setFlavors] = useState([]);
  const [plan, setPlan] = useState("5");
  const [flavorsSelected, setFlavorsSelected] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let HOST = window.location.origin.replace(/^http/, 'ws');
    let ws = new WebSocket(HOST);
    //const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        //console.log("Got ws data", JSON.parse(msg.data));
        setFlavors(JSON.parse(msg.data));
      };
    };
    fetch("/auth/getUser")
      .then(res => res.json())
      .then(_user => {
        if (_user) {
          setUser(_user);
          console.log(_user);
        }
      });
    fetch("varieties")
      .then(res => res.json())
      .then(data => {
        //console.log("Got data", data);
        if (data.err) {
          // setErr(JSON.stringify(data.msg));
        } else {
          setFlavors(data);
          let arr = [];
          for (let i = 0; i < Object.keys(data).length; i++) {
            arr.push({ name: data[i].name, value: 0 });
          }
          setFlavorsSelected(arr);
        }
      });
  }
  , []);

  const onImageClick1 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 1");
    document.getElementsByName("5")[0].className =
      "w3-light-blue-selected w3-margin";
    document.getElementsByName("10")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("15")[0].className = "w3-light-blue w3-margin";
    console.log("frecuencia", document.getElementsByName("frecuency")[0].value);
    setPlan("5");
  };
  const onImageClick2 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 2");
    document.getElementsByName("5")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("10")[0].className =
      "w3-light-blue-selected w3-margin";
    document.getElementsByName("15")[0].className = "w3-light-blue w3-margin";

    setPlan("10");
  };
  const onImageClick3 = () => {
    // document.getElementsByClassName("stepOne");
    console.log("PROBANDO IMAGEN 3");
    document.getElementsByName("5")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("10")[0].className = "w3-light-blue w3-margin";
    document.getElementsByName("15")[0].className = "w3-light-blue-selected w3-margin";

    setPlan("15");
  };

  function callBackFunction(name, value, key) {
    console.log("prueba call back:", name, value, key);
    let act = flavorsSelected;
    act[key] = { name: name + "", value: value };
    setFlavorsSelected(act);
    console.log(flavorsSelected);
  }

  const orderNow = () => {
    var frecuency = document.getElementsByName("frecuency")[0].value;
    var date = new Date()
    var data = { plan: plan, frecuency: frecuency, flavors: flavorsSelected, user:user._id, date};
    console.log("data ordernowm", data);

    fetch("/order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  function createCheckoutSession(stripe) {
    var frecuency = document.getElementsByName("frecuency")[0].value;
    var aux = 30.0;
    var urlImage = "";
    if (plan == 5) {
      aux = 2500.0;
      urlImage = "https://i.ibb.co/zhNnHn7/plan-1.png";
    } else if (plan == 10) {
      aux = 4500.0;
      urlImage = "https://i.ibb.co/z63KYKS/plan-2.png";
    } else {
      aux = 6000.0;
      urlImage = "https://i.ibb.co/6NFjN0q/plan-3.png";
    }

    //var data = { plan: plan, frecuency: frecuency, flavors: flavorsSelected };
    return fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: plan,
        quantity: 1,
        cost: aux,
        image: urlImage
      })
    }).then(function(result) {

      return result.json();
    }).then(orderNow());
  }

  /* Get your Stripe publishable key to initialize Stripe.js */
  fetch("/config")
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      window.config = json;
      var stripe = window.Stripe(window.config.publicKey);

      document
        .querySelector("#orderButton")
        .addEventListener("click", function(evt) {
          createCheckoutSession().then(function(data) {
            stripe
              .redirectToCheckout({
                sessionId: data.sessionId

              })
              .then(window.handleResult);
          })
        });
    });

  return (
    <div className="container" style={{ marginTop: 10 }}>
      <ol>
        <li>
          <h2 className="color4 tittle">CHOOSE YOUR PLAN</h2>
          <div className="divider"></div>
          <div className="grilla">
            <div
              className="w3-light-blue-selected w3-margin"
              name="5"
              onClick={onImageClick1}
            >
              <div className=" w3-center">
                <img src={plan1} width="200px" alt="Plan 1" />
              </div>
            </div>

            <div
              className="w3-light-blue w3-margin"
              name="10"
              onClick={onImageClick2}
            >
              <div className=" w3-center">
                <img src={plan2} width="200px" alt="Plan 2" />
              </div>
            </div>

            <div
              className="w3-light-blue w3-margin"
              name="15"
              onClick={onImageClick3}
            >
              <div className=" w3-center">
                <img src={plan3} width="200px" alt="Plan 3" />
              </div>
            </div>
          </div>
        </li>

        <li>
          <h2 className="color4 tittle">CHOOSE YOUR FREQUENCY</h2>
          <div className="divider"></div>
          <div className="stepTwo">
            <form className="aa">
              <p className="p-text">
                Deliver every{" "}
                <select name="frecuency">
                  <option default value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>{" "}
                weeks
              </p>
            </form>
          </div>
        </li>
        <li>
          <h2 className="color4 tittle">CHOOSE FLAVORS</h2>
          <div className="divider"></div>
          <p className="p-text">
            Please select the amount you want from each flavour
          </p>
        </li>
      </ol>
      <div className="grilla">
        {flavors.map((p, i) => (
          <Flavor
            name={p.name}
            key={i}
            aux={i}
            image={p.url}
            callBack={callBackFunction}
          ></Flavor>
        ))}
      </div>

      <div className="btn-container">
        <button type="button" className="orderButton" id="orderButton">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default BuyForm;
