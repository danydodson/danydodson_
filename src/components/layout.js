import React from 'react'
import tw from 'twin.macro'
import { Head } from '../components'
import GlobalStyles from '../styles/global-styles'

const Layout = ({ children, ...rest }) => (
  <>
    <Head />
    <div css={styles.container({ hasBackground: false })} {...rest}>
      <GlobalStyles />
      {children}
    </div>
  </>
)

export default Layout

const styles = {
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}
