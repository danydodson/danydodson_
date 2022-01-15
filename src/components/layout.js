import React from 'react'
import GlobalStyles from '../styles/global-styles'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
