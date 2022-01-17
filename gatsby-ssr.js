import React from 'react'

import { ThemeProvider } from './src/styles'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
