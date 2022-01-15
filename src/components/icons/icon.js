import React from 'react'

import { IconLogo, IconStar } from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Logo':
      return <IconLogo />
    case 'Star':
      return <IconStar />
    default:
      return <IconStar />
  }
}

export default Icon
