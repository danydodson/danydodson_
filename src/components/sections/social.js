import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'
import { Section } from '.'

const Social = () => (
  <Section name='social' centered>
    <article css={styles.container()}>
      <p tw='text-4xl'>
        Find my writing on my <Link to='#blog'>Blog</Link>, my thoughts on{' '}
        <a href='https://twitter.com/danydodson/' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
        , and my code on{' '}
        <a href='https://github.com/danydodson/' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        .
      </p>
      <p tw='text-4xl'>
        Feel free to reach out by sending me an{' '}
        <a href='mailto:dany@danydodson.dev' rel='noopener noreferrer'>
          Email
        </a>
        .
      </p>
    </article>
  </Section>
)

const styles = {
  container: () => [
    tw`w-[700px]`
  ],
}
export default Social
