import React from 'react'
import tw from 'twin.macro'

import { Layout, Seo, Toggle, Hero, } from './../components'

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo path={pathname} />

      <main css={styles.container({ hasBackground: false })}>
        <Toggle />
        <Hero />
      </main>
    </Layout>
  )
}

export default IndexPage

const styles = {
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}
