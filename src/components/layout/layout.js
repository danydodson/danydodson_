import React from 'react'
import PropTypes from 'prop-types'
import { ToggleTheme, ScrollUp } from '../shared'

const Layout = ({ children, location, ...rest }) => {
  return (
    <div {...rest}>
      {children}
      <ToggleTheme />
      <ScrollUp />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
