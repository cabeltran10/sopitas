import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import "./style/home.css";
import "./style/footer.css";
import "./style/order.css";
import "./style/banner.css";
import "./style/jumbotron.css";
import "./style/variety.css";
import "./style/history.css";
import "./style/notFound.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Information from "./components/Information";
import OurHistory from "./components/history/OurHistory";
import Footer from "./components/Footer";
import BuyForm from "./components/BuyForm";
import Variety from "./components/varieties/Variety";
import NotFoundPage from "./components/notFound/NotFoundPage";
import MyOrders from "./components/MyOrders";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth/getUser")
      .then(res => res.json())
      .then(_user => {
        if (_user) {
          setUser(_user);
        }
      });
  }, []);

  return (
    <Router>
      <div className="App container-fluid">
        <Header />
        <Navbar user={user} />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <Jumbotron />
              <Information />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/order"
          render={props => (
            <React.Fragment>
              <BuyForm user={user} />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/varieties"
          render={props => (
            <React.Fragment>
              <Variety />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/ourHistory"
          render={props => (
            <React.Fragment>
              <OurHistory />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/myOrders"
          render={props => (
            <React.Fragment>
              <MyOrders user={user}/>
            </React.Fragment>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
