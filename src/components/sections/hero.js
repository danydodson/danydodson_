import React from 'react'
import tw from 'twin.macro'
import { Section } from '.'

const Hero = () => (
  <Section name='hero'>
    <header css={styles.container()}>
      <h1 tw='text-[4.5rem] font-medium' className='fadeIn'>Dany Dodson</h1>
      <h3 tw='text-[2.5rem] font-light mt-[45px]' className='fadeIn'>I build things.</h3>
    </header>
  </Section>
)

const styles = {
  container: () => [
    tw`flex flex-col justify-center min-h-screen`
  ],
}

export default Hero
