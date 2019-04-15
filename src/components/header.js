import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div className="mainnav">
        <Navbar fixed="top" light expand="sm">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/insight">Bible Study</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/media">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">News</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/store">Projects</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
