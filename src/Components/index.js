import React from "react";
import {
  LandingPage,
  HomePage,
  Contact,
  Work,
  WrokBrandingPage,
  Freebies,
  FreebiesDeep,
  Team
} from "./Germs";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Dasboard = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/work-branding-page" component={WrokBrandingPage} />
        <Route exact path="/freebies" component={Freebies} />
        <Route exact path="/freebies-deep" component={FreebiesDeep} />
        <Route exact path="/team" component={Team} />
      </Router>
    </React.Fragment>
  );
};

export default Dasboard;
