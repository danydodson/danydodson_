import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from '.'

const Layout = ({ children, location, ...rest }) => {
  return (
    <div {...rest}>
      <Nav />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout

