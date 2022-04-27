import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Topgainers,
  Toplosers,
  CurrentIPO,
  News,
  Homepage,
  Near52weeklow,
  Near52weekhigh,
  CryptoNews,
  Cryptocurrencies,
  NiftyFifty,
  CryptoDetails,
  LineChart,
  NiftyFiftyDetails
} from "./components";
import Knowledge from "./components/Knowledge";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route exact path="/niftyFifty">
                <NiftyFifty />
              </Route>

              <Route exact path="/currentIPO">
                <CurrentIPO />
              </Route>

              <Route exact path="/topgainers">
                <Topgainers />
              </Route>
              <Route exact path="/niftydetails">
                <NiftyFiftyDetails />
              </Route>

              <Route exact path="/toplosers">
                <Toplosers />
              </Route>
              <Route exact path="/toplosers">
                <Toplosers />
              </Route>
              <Route exact path="/toplosers">
                <Toplosers />
              </Route>
              <Route exact path="/cryptonews">
                <CryptoNews />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>

              <Route exact path="/knowledge">
                <Knowledge />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            StockInfo <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactUs">Contact Us</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
