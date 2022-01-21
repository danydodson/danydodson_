import React from 'react'

import { ThemeProvider } from './src/styles'
import { MDXProvider } from '@mdx-js/react'
import { Embed } from './src/components'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={{ Embed }}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)
