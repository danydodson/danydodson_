import tw, { styled } from 'twin.macro'

const Button = styled.button(({ variant, isSmall }) => [

  tw`text-primary opacity-90`,

  tw`focus:outline-none transform duration-75`,

  tw`hover:(scale-105 text-yellow-300 opacity-100)`,

  variant === 'icon' && tw`w-6 h-6 fill-current`,

  isSmall ? tw`text-sm` : tw`text-lg`,

])

export default Button
