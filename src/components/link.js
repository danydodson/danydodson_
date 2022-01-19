import tw, { styled } from 'twin.macro'

const Link = styled.a(({ isSmall }) => [

  tw`text-primary opacity-90`,

  isSmall ? tw`text-sm` : tw`text-lg`,
  
])

export default Link
