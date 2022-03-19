import React from 'react'
import PropTypes from 'prop-types'
import { ToggleTheme, ScrollToTop } from '.'

const Layout = ({ children, location, ...rest }) => {
  return (
    <div {...rest}>
      <ToggleTheme />
      {children}
      <ScrollToTop />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
