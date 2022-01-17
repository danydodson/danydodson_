import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

import { stylesBase } from '../styles'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={stylesBase} />
  </>
)

export default GlobalStyles
