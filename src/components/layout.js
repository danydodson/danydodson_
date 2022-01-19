import React, { useEffect } from 'react'
import { Head } from '../components'
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
    <>
      <Head />
      <div {...rest}>
        <GlobalStyles />
        {children}
      </div>
    </>
  )
}

export default Layout

