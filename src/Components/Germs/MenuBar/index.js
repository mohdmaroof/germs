import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleMobileMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" className="bg-white">
          <NavbarToggler onClick={this.toggleMobileMenu} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-table" navbar>
              <NavItem className="py-1 position-relative">
                <Link
                  className="text-decoration-none"
                  to="/homepage"
                  activeClassName="brand-color brand-border-left"
                >
                  Home
                </Link>
              </NavItem>
              <NavItem className="py-1 position-relative">
                <Link
                  className={
                    this.props.brandColorWork + " text-decoration-none"
                  }
                  activeClassName="brand-color brand-border-left"
                  to="/work"
                >
                  Work
                </Link>
              </NavItem>
              <NavItem className="py-1 position-relative">
                <Link
                  className={this.props.brandColor + " text-decoration-none"}
                  activeClassName="brand-color brand-border-left"
                  to="/freebies"
                >
                  Freebies
                </Link>
              </NavItem>
              <NavItem className="py-1 position-relative">
                <Link
                  className="text-decoration-none"
                  activeClassName="brand-color brand-border-left"
                  to="/team"
                >
                  Team
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MenuBar;
