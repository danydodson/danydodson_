import React from 'react'

import { Layout } from '../components'

const IndexPage = () => (
  <Layout>
    <section>
      <h1>
        Thanks!{' '}
        <span role='img' aria-label='Heart Raised-hands'>
          ❤️🙌
        </span>
      </h1>
      <h3>
        I’m truly grateful to all the wonderful humans and companies{' '}
        <a
          href='https://www.patreon.com/danydodson'
          rel='noopener noreferrer'
          target='_blank'
        >
          supporting
        </a>{' '}
        my open source work.
      </h3>
    </section>
  </Layout>
)

export default IndexPage
