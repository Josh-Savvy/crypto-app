import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import "./App.css";
import Homepage, {
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  News,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <CryptoCurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Routes>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
