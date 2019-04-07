import React, { Component } from "react";
import Dashboard from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/settings.scss";
import "./Assets/css/animate.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
