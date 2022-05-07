import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section } from '.'

const About = () => (
  <Section name='about' fullPage centered>
    <Article className='article'>
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
    </Article>
  </Section>
)

const responify = tw`text-3xl md:text-4xl lg:text-5xl`

const Article = styled.article(() => [
  responify,
  css`
    p {margin-top: 21px;}
    & p {transition: color 0.5s ease;}
    &:hover>p {color: var(--text-tertiary);}
    &:hover>p>span.keyword {color: var(--text-secondary);}
    & p>span.keyword {transition: color 0.5s ease;}
  `,
])

export default About
