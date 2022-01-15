import React from 'react'

import { IconCollapse, IconLogo, IconStar } from '.'

const Icon = ({ name }) => {

  switch (name) {

    case 'Collapse':
      return <IconCollapse />

    case 'Logo':
      return <IconLogo />

    case 'Star':
      return <IconStar />

    default:
      return <IconStar />
  }
}

export default Icon
