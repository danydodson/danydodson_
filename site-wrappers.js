import React from 'react'

import { ThemeProvider } from './src/styles'
import { MDXProvider } from '@mdx-js/react'
import { Embed } from './src/components'

const RootLayout = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={{ Embed }}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)

export default RootLayout