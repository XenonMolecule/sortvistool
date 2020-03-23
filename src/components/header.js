import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <>
    <Navbar bg="light">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
    </Navbar>
    <hr style={{'marginTop' : '0px'}}/>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
