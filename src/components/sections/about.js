import React from 'react'
import tw from 'twin.macro'
import { Section } from '.'

const About = () => (
  <Section name='about'>
    <article css={styles.container()}>
      <p tw='text-[2rem]'>
        I'm a <span className='keyword'>maker</span> &amp; digital{' '}
        <span className='keyword'>nomad</span>.
      </p>
      <p tw='text-[2rem]'>
        I code in JavaScript for pretty much{' '}
        <span className='keyword'>everything</span> (React, Electron, NodeJS,
        etc.), Python for <span className='keyword'>AI</span>, and Swift/Java
        for <span className='keyword'>mobile apps.</span> I{' '}
        <span className='keyword'>design</span> in Sketch.
      </p>
    </article>
  </Section>
)

const styles = {
  container: () => [
    tw`flex flex-col justify-center`
  ],
}

export default About
