import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro'
import { useScrollDirection } from '../hooks'
import { Toggle } from '.'

const Navbar = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Nav>
        {isMounted && (
          <Toggle />
        )}
      </Nav>
    </Header>
  )
}

Navbar.propTypes = {
  isHome: PropTypes.bool
}

const Header = styled.header(({ scrollDirection, scrolledToTop }) => [
  tw`top-0 fixed bg-secondary text-secondary w-full h-[40px] z-10`,
  tw`ease-nav transition-all duration-500`,
  scrollDirection === 'down' && !scrolledToTop && tw`h-0.5 translate-y-[-40px]`,
  scrollDirection === 'up' && !scrolledToTop && tw`h-[40px] opacity-90`,
])

const Nav = styled.nav(() => [
  tw`h-full max-w-[80%] my-0 mx-auto flex justify-between items-center`,
])

export default Navbar
