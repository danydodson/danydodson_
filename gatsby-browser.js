import React from 'react'

import RootLayout from './site-wrappers'

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)
