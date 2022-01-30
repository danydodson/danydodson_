import React from 'react'
import tw from 'twin.macro'

import { Layout, Seo, Posts } from '../components'

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo path={pathname} />

      <main css={styles.container()}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </main>

    </Layout>
  )
}

const styles = {
  container: () => [
    tw`flex flex-col items-center justify-center h-screen`,
  ]
}

export default IndexPage