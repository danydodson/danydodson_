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
    tw`flex flex-col`,
    tw`max-w-[80%] my-0 mx-auto sm:mx-14 md:mx-32 lg:mx-64 xl:mx-96`,
  ]
}

export default IndexPage