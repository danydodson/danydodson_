import React from 'react'
import tw from 'twin.macro'

import { Layout, Seo, Hero, About, Social, Posts } from '../components'

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo path={pathname} />
      <main css={styles.container()}>
        <Hero />
        <About />
        <Posts />
        <Social />
      </main>
    </Layout>
  )
}

const styles = {
  container: () => [
    tw``,
  ]
}

export default IndexPage