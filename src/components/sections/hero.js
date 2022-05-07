import React from 'react'
import tw from 'twin.macro'
import { Section } from '.'

const Hero = () => (
  <Section name='hero' fullPage centered>
    <h1 css={[H1]} className='fadeIn'>Dany Dodson</h1>
    <h3 css={[H2]} className='fadeIn'>I build things.</h3>
  </Section>
)

const H1 = tw`text-[3.5rem] font-black md:text-8xl lg:text-[10rem]`
const H2 = tw`text-[2.7rem] font-normal mt-12 md:text-7xl lg:text-[7rem]`

export default Hero
