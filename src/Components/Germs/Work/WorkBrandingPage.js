import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "../../Germs";

import backArrow from "../../../Assets/images/Icons/back_arrow.svg";
import apple_inc from "../../../Assets/images/work/apple_inc.PNG";
import mobile_action from "../../../Assets/images/work/mobile_action.PNG";
import call_action from "../../../Assets/images/work/call_action.PNG";

// Social Icons
import hireUsVisual from "../../../Assets/images/Illustration/hire_us_visual.svg";
import Instagrame from "../../../Assets/images/Icons/Instagrame_icon.svg";
import Pintrest from "../../../Assets/images/Icons/Pintrest_icon.svg";
import Behance from "../../../Assets/images/Icons/Behance_icon.svg";
import Dribbble from "../../../Assets/images/Icons/Dribbble_icon.svg";
import Linkedin from "../../../Assets/images/Icons/Linkedin_icon.svg";
import Facebook from "../../../Assets/images/Icons/facebook_icon.svg";
import scroll_up_icon from "../../../Assets/images/Icons/scroll_up_icon.svg";

const WrokBrandingPage = () => {
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
            <MenuBar brandColorWork="brand-color brand-border-left" />
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
            <small className="brand-color">
              <Link className="text-decoration-none" to="work">
                <img
                  className="mr-2 backArrow"
                  src={backArrow}
                  alt="Back Arrow"
                />
                Back
              </Link>
            </small>
            <h1 className="mb-5">Apple Re-branding</h1>
            <h4>Information</h4>
            <div className="row">
              <div className="col-lg-5 my-3">
                <div className="row">
                  <div className="col-lg-4 col-md-3">
                    <p className="text-muted">Client</p>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <p>Apple Inc.</p>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <p className="text-muted">Project</p>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <p>E-commerce, Branding</p>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <p className="text-muted">Skills</p>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <p>
                      Conception, Shooting, Creative direction, Art irection,
                      Project Management, UI / UX, Motion Design, Front
                      Development
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <p className="text-muted">Specs</p>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <p>
                      Magento, WebGL / ThreeJs (interface), GSAP (animation),
                      Ajax, Parallax, CSS3, HTML5
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 my-3">
                <div className="row">
                  <div className="col-lg-2 px-lg-0 px-xl-0 px-md-0">
                    <p className="text-muted">Case Study</p>
                  </div>
                  <div className="col-lg-10">
                    <p>
                      Our assignment: create a new digital platform and visual
                      identify for Packwire, a leading startup that specializes
                      in the manufacturing of customized boxes with online
                      payment options. In this niche smallvolume printing market
                      in Canada & the United States, it was essential that we
                      create appealing, modern and realistic web graphics, as
                      well as a GL Web compatibility design, created
                      specifically for startups and designers. Powered by
                      Magento, we developed an immersive experience where users
                      could create and customize packaging boxes. They can
                      configure the type of box, size, colour, text and
                      downloaded images to style the box and share it, all
                      according to his/her own style. The web application uses a
                      3D box projection integrated into the platform, and also
                      offers the option of creating the final visual including
                      the die cut and die lines, ready to print in 2D.
                    </p>
                    <p>
                      <Link
                        to="work-branding-page"
                        className="text-decoration-underline"
                      >
                        Visit online
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 mt-xl-5 mt-3">
              <div className="col-lg-12 mb-4">
                <img
                  className="w-100 rounded"
                  src={apple_inc}
                  alt="Apple INC"
                />
              </div>
              <div className="col-lg-12 mb-4">
                <img
                  className="w-100 rounded"
                  src={mobile_action}
                  alt="Mobile Action"
                />
              </div>
              <div className="col-lg-12 mb-4">
                <img
                  className="w-100 rounded"
                  src={call_action}
                  alt="Call Action"
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

export default WrokBrandingPage;
