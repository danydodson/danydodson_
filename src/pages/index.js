import React from 'react'
import tw from 'twin.macro'

import { Button, Logo, Layout } from './../components'

const IndexPage = () => (
  <Layout>
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="tertiary">New</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  </Layout>
)

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

export default IndexPage
