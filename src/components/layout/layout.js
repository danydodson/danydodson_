import React from 'react'
import PropTypes from 'prop-types'
import { ToggleTheme, ScrollUp } from '.'

const Layout = ({ children, location, ...rest }) => {
  return (
    <div {...rest}>
      <ToggleTheme />
      <ScrollUp />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
