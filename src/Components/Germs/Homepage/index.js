import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "../../Germs";
import homePageVisual from "../../../Assets/images/Illustration/home_page_visual.svg";
import UXUI from "../../../Assets/images/Icons/ui_web_mobile.svg";
import brandingVisualIdentity from "../../../Assets/images/Icons/branding_visual_identity.svg";
import digitalMarketing from "../../../Assets/images/Icons/digital_marketing.svg";
import productPhotography from "../../../Assets/images/Icons/product_photography.svg";
import FMA from "../../../Assets/images/Icons/fine_modern_art.svg";
import ClientLogo1 from "../../../Assets/images/clients/1_Client_logo.svg";
import ClientLogo2 from "../../../Assets/images/clients/2_Client_logo.svg";
import ClientLogo3 from "../../../Assets/images/clients/3_Client_logo.svg";
import ClientLogo4 from "../../../Assets/images/clients/4_Client_logo.svg";
import ClientLogo5 from "../../../Assets/images/clients/5_Client_logo.svg";
import ClientLogo6 from "../../../Assets/images/clients/6_Client_logo.svg";
import ClientLogo7 from "../../../Assets/images/clients/7_Client_logo.svg";
import ClientLogo8 from "../../../Assets/images/clients/8_Client_logo.svg";
import hireUsVisual from "../../../Assets/images/Illustration/hire_us_visual.svg";
import Instagrame from "../../../Assets/images/Icons/Instagrame_icon.svg";
import Pintrest from "../../../Assets/images/Icons/Pintrest_icon.svg";
import Behance from "../../../Assets/images/Icons/Behance_icon.svg";
import Dribbble from "../../../Assets/images/Icons/Dribbble_icon.svg";
import Linkedin from "../../../Assets/images/Icons/Linkedin_icon.svg";
import Facebook from "../../../Assets/images/Icons/facebook_icon.svg";
import scroll_up_icon from "../../../Assets/images/Icons/scroll_up_icon.svg";

const Homepage = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-white">
        <ul className="navbar-nav pl-2">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link text-uppercase font-weight-bold text-dark"
              href="#"
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
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12">
            <p className="font-4em d-none d-md-block d-lg-block d-xl-block">
              We believe when
              <br /> design and technology
              <br /> meet, problems Solve.
            </p>
            <h4 className="d-lg-none d-xl-none d-md-none d-sm-block">
              We believe when design and technology meet, problems Solve.
            </h4>
            <div className="mt-5">
              <Link to="contact">
                <button className="btn hireUs brand-gradient text-white">
                  Hire us
                </button>
              </Link>
            </div>
            <div className="home_page_visual d-lg-none d-xl-none d-md-none d-block mt-5">
              <img className="w-100" src={homePageVisual} alt="Fine Art Logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-3 mt-lg-5 mt-md-3">
            <p className="brand-color mt-lg-5 mt-xl-5 mt-md-4">
              Start a project
            </p>
            <p className="font-12">+91 8888476673</p>
            <p className="font-12">+91 9766612499</p>
            <p className="font-12">contact@germsatwork.com</p>
            <small className="font-8">
              © Germs Fine Art & Design Studio 2019
            </small>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="home_page_visual d-none d-md-block d-lg-block d-xl-block">
              <img className="w-100" src={homePageVisual} alt="Fine Art Logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 mt-5" />
          <div className="col-lg-10 col-md-10 col-sm-12">
            <h1 className="mb-4">Services</h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <img
                  className="height-75"
                  src={UXUI}
                  alt="UX / UI - Web  Mobile"
                />
                <h4>UX / UI - Web & Mobile</h4>
                <p>
                  Device specific interation design solution for better
                  experience and usability.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <img
                  src={brandingVisualIdentity}
                  alt="Branding Visual Identity"
                />
                <h4>Branding & Visual Identity</h4>
                <p>
                  Complete brand and services identity creation and logo design.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <img src={digitalMarketing} alt="Digital Marketing" />
                <h4>Digital Marketing</h4>
                <p>
                  Multiple portal based digital advertisement, campain, post and
                  lead generation.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <img src={productPhotography} alt="Product Photography" />
                <h4>Product Photography</h4>
                <p>
                  Enhancing product advertisement with elegant lightbox based
                  photography
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                <img src={FMA} alt="FMA" />
                <h4>Fine & Modern Art</h4>
                <p>
                  Handmade marvels enhancing the beauty of ecosystems with rear
                  abstract.
                </p>
              </div>
            </div>
            <h1 className="mb-4 mt-lg-5">Clients</h1>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo1} alt="Client 1" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo2} alt="Client 2" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo3} alt="Client 3" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo4} alt="Client 4" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo5} alt="Client 5" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo6} alt="Client 6" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo7} alt="Client 7" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-auto my-2">
                <div className="text-center">
                  <img src={ClientLogo8} alt="Client 8" />
                </div>
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

export default Homepage;
