import React from 'react'
import PropTypes from 'prop-types'

import { IconDown, IconMoon, IconStar, IconSun, IconUp, } from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Down':
      return <IconDown />
    case 'Moon':
      return <IconMoon />
    case 'Star':
      return <IconStar />
    case 'Sun':
      return <IconSun />
    case 'Up':
      return <IconUp />
    default:
      return <IconStar />
  }
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
