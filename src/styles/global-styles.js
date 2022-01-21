import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import { baseStyles } from '.'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={baseStyles} />
  </>
)

export default GlobalStyles
