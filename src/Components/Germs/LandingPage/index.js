import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/Icons/Germs_Logo.svg";
import ScrollDownIcon from "../../../Assets/images/Icons/scroll_down_icon.svg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="designStudioLogo">
        <div className="logoCenter">
          <img className="w-100" src={logo} alt="Fine Art Logo" />
        </div>
      </div>
      <div className="position-absolute goHomeIcon">
        <Link to="homepage">
          <img
            className="animated infinite bounce slow delay-1s very-slow-animation"
            src={ScrollDownIcon}
            alt="Scroll Down"
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
