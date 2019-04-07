import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "../../Germs";

// Team pics

import team1 from "../../../Assets/images/team/team1.PNG";
import share_icon from "../../../Assets/images/Icons/share_icon.svg";

// Social Icons
import hireUsVisual from "../../../Assets/images/Illustration/hire_us_visual.svg";
import Instagrame from "../../../Assets/images/Icons/Instagrame_icon.svg";
import Pintrest from "../../../Assets/images/Icons/Pintrest_icon.svg";
import Behance from "../../../Assets/images/Icons/Behance_icon.svg";
import Dribbble from "../../../Assets/images/Icons/Dribbble_icon.svg";
import Linkedin from "../../../Assets/images/Icons/Linkedin_icon.svg";
import Facebook from "../../../Assets/images/Icons/facebook_icon.svg";
import scroll_up_icon from "../../../Assets/images/Icons/scroll_up_icon.svg";

const Team = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-white">
        <ul className="navbar-nav pl-2">
          <li className="nav-item">
            <Link
              className="nav-link text-uppercase font-weight-bold text-dark"
              to="./"
            >
              germs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <MenuBar />
            <div className="clearfix py-lg-5" />
            <p className="brand-color mt-lg-5 mt-xl-5 mt-md-4 pt-lg-5 pt-xl-5 pt-md-5">
              Start a project
            </p>
            <p className="font-12">+91 8888476673</p>
            <p className="font-12">+91 9766612499</p>
            <p className="font-12">contact@germsatwork.com</p>
            <small className="font-8">
              © Germs Fine Art & Design Studio 2019
            </small>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12">
            <h1 className="mb-3">Our Team</h1>
            <div className="row">
              <div className="col-lg-3 col-xl-3 col-md-4 my-4">
                <img className="w-100 rounded" src={team1} alt="Saif" />
                <h3 className="mt-3">Saifee Khan</h3>
                <p className="text-muted mb-0">Head of Design</p>
                <img className="team-social" src={Linkedin} alt="Linkedin" />
                <img
                  className="team-social ml-2"
                  src={share_icon}
                  alt="Email"
                />
              </div>
            </div>

            <div className="row my-lg-5">
              <div className="col-lg-6 col-md-6 col-sm-12 my-lg-5 my-sm-2">
                <h1>Let’s make something great together.</h1>
                <h4>Get in touch with us for a quick quote</h4>
                <div className="hire-button">
                  <Link to="contact">
                    <button className="btn hireUs brand-gradient text-white">
                      Hire us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 my-lg-3 my-sm-2">
                <img className="w-100" src={hireUsVisual} alt="Hire Us" />
              </div>
            </div>
            <div className="row my-lg-3 my-sm-2">
              <div className="col-lg-8 col-md-9 col-sm-12 my-3">
                <div className="row">
                  <div className="col-auto">
                    <img src={Instagrame} alt="Instagrame" />
                  </div>
                  <div className="col-auto">
                    <img src={Pintrest} alt="Pintrest" />
                  </div>
                  <div className="col-auto">
                    <img src={Behance} alt="Behance" />
                  </div>
                  <div className="col-auto">
                    <img src={Dribbble} alt="Dribbble" />
                  </div>
                  <div className="col-auto">
                    <img src={Linkedin} alt="Linkedin" />
                  </div>
                  <div className="col-auto">
                    <img src={Facebook} alt="Facebook" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-12 my-3">
                <div className="text-right">
                  <p className="brand-color">
                    Back to Top
                    <img src={scroll_up_icon} alt="Back to Top" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
