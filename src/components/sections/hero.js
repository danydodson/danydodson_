import React from 'react'
import tw from 'twin.macro'
import { Section } from '.'

const Hero = () => (
  <Section name='hero' centered fullPage>
    <header css={styles.container()}>
      <h1 tw='text-[6.5rem] font-medium' className='fadeIn'>Dany Dodson</h1>
      <h3 tw='text-[4.5rem] font-light' className='fadeIn'>I build things.</h3>
    </header>
  </Section>
)

const styles = {
  container: () => [
    tw`w-[700px]`
  ],
}

export default Hero
