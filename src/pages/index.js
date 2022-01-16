import React from 'react'
import tw from 'twin.macro'

import {
  Layout,
  Hero,
  // Projects,
  // Posts,
  // Form
} from './../components'

const IndexPage = () => (
  <Layout>
    <main css={styles.container({ hasBackground: false })}>
      <Hero />
      {/* <Posts /> */}
      {/* <Projects /> */}
      {/* <Form /> */}
    </main>
  </Layout>
)

export default IndexPage

const styles = {
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}
