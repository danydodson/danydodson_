import React from 'react'

const Layout = ({ children, location, ...rest }) => {

  return (
    <div {...rest}>
      {children}
    </div>
  )
}

export default Layout

