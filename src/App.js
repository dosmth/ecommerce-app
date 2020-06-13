import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./layouts/Categories";
import User from "./layouts/User";
import Product from "./layouts/Product";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ minHeight: "calc(100vh - 150px)" }}>
          <Router>
            <Header />
            <Route exact path="/">
              <Redirect to="/category/cat-1" />
            </Route>
            <Route exact path="/category/:url" component={Categories} />
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/product/:id" component={Product} />
            {/* <Route path="/contacts" component={Contacts} /> */}
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
