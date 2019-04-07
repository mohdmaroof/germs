import React, { Component } from "react";
import { Link } from "react-router-dom";
import back_arrow from "../../../Assets/images/Icons/back_arrow.svg";
import Attached_icon from "../../../Assets/images/Icons/Attached_icon.svg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedWebMobile: false,
      webMobile: ""
    };
  }

  checkedClick = e => {
    this.setState(prevState => ({
      checkedWebMobile: !prevState.checkedWebMobile
    }));
  };

  ui = () => {
    if (this.state.checkedWebMobile === true) {
      const webMobileValue = "UX / UI - Web & Mobile";
      this.setState({ webMobile: webMobileValue });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-lg-2 col-md-2 col-sm-12 my-2">
              <div className="text-center">
                <small className="brand-color">
                  <Link className="text-decoration-none" to="homepage">
                    <img
                      className="mr-2 backArrow"
                      src={back_arrow}
                      alt="Back Arrow"
                    />
                    Back
                  </Link>
                </small>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-12 my-2">
              <h1 className="mb-3">Let's talk</h1>
              <p className="text-muted mb-4">
                Our team is here to help you bring your ideas to life
              </p>
              <h4>Tell us a bit about yourself.</h4>
              <form onSubmit={this.handleSubmit} autoComplete="off">
                <div className="row my-2">
                  <div className="col-auto my-2">
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      className="form-control bg-light border-0 shadow-none"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-auto my-2">
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      className="form-control bg-light border-0 shadow-none"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-auto my-2">
                    <input
                      type="text"
                      name="phone"
                      onChange={this.handleChange}
                      className="form-control bg-light border-0 shadow-none"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>
                <h4 className="my-3">What can we help you with?</h4>
                <div className="row">
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="webMobile"
                        value="UX / UI - Web & Mobile"
                        className="custom-control-input shadow-none"
                        checked={this.state.checkedWebMobile}
                        onChange={this.ui}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="webMobile"
                        onClick={this.checkedClick}
                      >
                        UX / UI - Web & Mobile
                      </label>
                    </div>
                  </div>
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="brandingVI"
                        value="Branding & Visual Identity"
                        className="custom-control-input shadow-none"
                        onChange={this.handleChange}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="brandingVI"
                      >
                        Branding & Visual Identity
                      </label>
                    </div>
                  </div>
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="digitalMarketing"
                        value="Digital Marketing"
                        className="custom-control-input shadow-none"
                        onChange={this.handleChange}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="digitalMarketing"
                      >
                        Digital Marketing
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="designConsultation"
                        value="Design Consultation"
                        className="custom-control-input shadow-none"
                        onChange={this.handleChange}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="designConsultation"
                      >
                        Design Consultation
                      </label>
                    </div>
                  </div>
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="productPhotography"
                        value="Product Photography"
                        className="custom-control-input shadow-none"
                        onChange={this.handleChange}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="productPhotography"
                      >
                        Product Photography
                      </label>
                    </div>
                  </div>
                  <div className="col-auto my-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="fMArt"
                        value="Fine & Modern Art"
                        className="custom-control-input shadow-none"
                        onChange={this.handleChange}
                      />
                      <label className="custom-control-label" htmlFor="fMArt">
                        Fine & Modern Art
                      </label>
                    </div>
                  </div>
                </div>
                <h4 className="my-3">
                  Could you please brife your requriment?
                </h4>
                <div className="row">
                  <div className="col-lg-10">
                    <textarea
                      className="form-control bg-light border-0 shadow-none"
                      name="message"
                      onChange={this.handleChange}
                      placeholder="Start Typing..."
                      required
                    />
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-10">
                    <div className="file">
                      <div className="position-relative">
                        <img
                          className="file-icon"
                          src={Attached_icon}
                          alt="Attachement"
                        />
                        <input
                          type="file"
                          onChange={this.handleChange}
                          name="file"
                          className="file-image-icon"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <div className="mb-3 mt-5 text-right">
                      <input
                        type="submit"
                        value="Send request"
                        className="btn hireUs brand-gradient text-white"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
