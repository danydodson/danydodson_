import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import { themeStyles } from '.'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={themeStyles} />
  </>
)

export default GlobalStyles
