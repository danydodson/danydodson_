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
        <a className='resume-button' href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
      </Nav>
    </Header>
  )
}

Navbar.propTypes = {
  isHome: PropTypes.bool
}

const Header = styled.header(({ scrollDirection, scrolledToTop }) => [
  tw`top-0 fixed bg-indigo-300 w-full h-nav z-10`,
  tw`ease-nav transition-all duration-500`,
  scrollDirection === 'down' && !scrolledToTop && tw`h-0.5 translate-y-[-90px]`,
  scrollDirection === 'up' && !scrolledToTop && tw`h-nav-scrolling opacity-80`,
])

const Nav = styled.nav(() => [
  tw`h-full mx-4 flex justify-between items-center`,
])

export default Navbar
