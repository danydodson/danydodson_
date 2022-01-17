import React from 'react'
import { ThemeProvider } from './src/styles'
import 'twin.macro'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
