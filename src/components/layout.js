import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles } from '../styles'

const Layout = ({ children, location, ...rest }) => {

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView()
        el.focus()
      }
    }
  })

  return (
    <div {...rest}>
      <GlobalStyles />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout

