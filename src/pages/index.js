import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import tw from 'twin.macro'

import { Layout, Seo, Toggle, Hero, Posts } from './../components'

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <React.StrictMode>

      <Layout location={location}>
        <Seo path={pathname} />

        <main css={styles.container({ hasBackground: false })}>
          <Toggle />
          <Hero />

          <AniLink paintDrip to='posts'>
            Go to Posts
          </AniLink>

          <Posts />
        </main>
      </Layout>
    </React.StrictMode>
  )
}

export default IndexPage

const styles = {
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b`,
  ],
}


