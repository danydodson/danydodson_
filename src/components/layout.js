import React from 'react'
import { Head } from '../components'
import GlobalStyles from '../styles/global-styles'

const Layout = ({ children, ...rest }) => (
  <>
    <Head />
    <div {...rest}>
      <GlobalStyles />
      {children}
    </div>
  </>
)

export default Layout

