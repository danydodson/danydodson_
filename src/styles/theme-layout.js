import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'

import { ThemeProvider, themeBase } from '../styles'

import { Embed, Collapsable, Danger } from '../components'

const components = { Embed, Collapsable, Danger }

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
