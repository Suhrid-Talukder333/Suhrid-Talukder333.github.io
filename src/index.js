import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
