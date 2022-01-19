import React from 'react'
import PropTypes from 'prop-types'

import { IconMoon, IconStar, IconSun } from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Moon':
      return <IconMoon />
    case 'Star':
      return <IconStar />
    case 'Sun':
      return <IconSun />
    default:
      return <IconStar />
  }
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
