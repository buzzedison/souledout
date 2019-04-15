/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import Header from "./header"
import "./layout.css"
import "../styles/index.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Souledout</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Bible Study</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link>
                  © {new Date().getFullYear()}, Powered by
                  {` `}
                  <a href="https://www.bloopglobal.com">BLOOP</a>
                </Nav.Link>
              </Nav>
            </Navbar>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
