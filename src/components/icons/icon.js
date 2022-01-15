import React from 'react'

import { IconStar } from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Star':
      return <IconStar />
    default:
      return <IconStar />
  }
}

export default Icon
