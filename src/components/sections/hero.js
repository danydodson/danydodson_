import React from 'react'
import tw from 'twin.macro'
import { Section } from '.'

const Hero = () => (
  <Section name='hero' fullPage centered>
    <h1 css={[respH1]} className='fadeIn'>Dany Dodson</h1>
    <h3 css={[respH2]} className='fadeIn'>I build things.</h3>
  </Section>
)

const respH1 = tw`text-[3.5rem] font-black md:text-8xl lg:text-[10rem]`
const respH2 = tw`text-[2.7rem] font-normal mt-12 md:text-7xl lg:text-[7rem]`

export default Hero
