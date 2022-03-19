import { Global } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { themeBase, ThemeProvider } from '../styles'

// import { Collapsable } from '../components/mdx'
// const components = { Collapsable, TextBlock }

const components = {}

const ThemeLayout = ({ element }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Global styles={themeBase} />
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)

export default ThemeLayout
