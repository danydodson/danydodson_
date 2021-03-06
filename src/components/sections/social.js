import React from 'react'
import { Link } from 'gatsby'
import { Section } from '.'

const Social = () => (
  <Section name='social' centered >
    <footer>
      <p tw='text-[2rem]'>
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
      <p tw='text-[2rem]'>
        Feel free to reach out by sending me an{' '}
        <a href='mailto:dany@danydodson.dev' rel='noopener noreferrer'>
          Email
        </a>
        .
      </p>
    </footer>
  </Section>
)

export default Social
