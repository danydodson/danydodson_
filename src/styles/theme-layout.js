import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'
import { Embed, Collapsable } from '../components'
import { ThemeProvider, themeBase } from '../styles'

const components = { Embed, Collapsable }

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
