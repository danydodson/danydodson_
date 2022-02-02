import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

import { Layout, Seo, Section, Posts } from '../components'

const IndexPage = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo path={pathname} />

      <main css={styles.container()}>

        <Section name='hero' centered fullPage>
          <h1 className='head fadeIn'>Dany Dodson</h1>
          <h3 className='subhead fadeIn'>I build things.</h3>
        </Section>

        <Section name='about' centered>
          <p>
            I'm a <span className='keyword'>maker</span> &amp; digital{' '}
            <span className='keyword'>nomad</span>.
          </p>
          <p>
            I code in JavaScript for pretty much{' '}
            <span className='keyword'>everything</span> (React, Electron, NodeJS,
            etc.), Python for <span className='keyword'>AI</span>, and Swift/Java
            for <span className='keyword'>mobile apps.</span> I{' '}
            <span className='keyword'>design</span> in Sketch.
          </p>
        </Section>

        <Section name='posts' centered fullPage>
          <Posts />
        </Section>

        <Section name='social'>
          <p>
            Find my writing on my <Link to='#blog'>Blog</Link>, my thoughts on{' '}
            <a href='https://twitter.com/danydodson' target='_blank' rel='noopener noreferrer'>
              Twitter
            </a>
            , and my code on{' '}
            <a href='https://github.com/danydodson' target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
            .
          </p>
          <p>
            Feel free to reach out by sending me an{' '}
            <a href='mailto:mathieu@dutour.me' rel='noopener noreferrer'>
              Email
            </a>
            .
          </p>
        </Section>

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