import React from 'react'
import { GlobalStyles } from '../styles'

const Layout = ({ children, location, ...rest }) => {

  return (
    <div {...rest}>
      <GlobalStyles />
      {children}
    </div>
  )
}

export default Layout

