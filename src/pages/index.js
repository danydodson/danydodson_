import React from 'react'
import tw from 'twin.macro'
import { Layout, Seo } from '../components/layout'
import { Hero, About, Posts, Social } from '../components/sections'

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
    tw`flex flex-col items-center mx-[10%]`,
  ]
}

export default IndexPage