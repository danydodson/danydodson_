import React from 'react'

import { ThemeProvider, GlobalStyles } from './src/styles'
import { MDXProvider } from '@mdx-js/react'
import { Embed } from './src/components'
import { Collapsable } from './src/components/mdx'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyles />
    <MDXProvider components={{ Embed, Collapsable }}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)
