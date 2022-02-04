import React from 'react'
import { Section } from '.'

const About = () => (
  <Section name='about' centered>
    <article tw='w-[700px]'>
      <p tw='text-4xl'>
        I'm a <span className='keyword'>maker</span> &amp; digital{' '}
        <span className='keyword'>nomad</span>.
      </p>
      <p tw='text-4xl'>
        I code in JavaScript for pretty much{' '}
        <span className='keyword'>everything</span> (React, Electron, NodeJS,
        etc.), Python for <span className='keyword'>AI</span>, and Swift/Java
        for <span className='keyword'>mobile apps.</span> I{' '}
        <span className='keyword'>design</span> in Sketch.
      </p>
    </article>
  </Section>
)

export default About
