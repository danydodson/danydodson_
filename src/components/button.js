import tw, { styled } from 'twin.macro'

const Button = styled.button(({ variant }) => [
  tw`text-primary opacity-90`,
  tw`focus:outline-none transform duration-75`,
  tw`hover:(scale-105 text-yellow-300 opacity-100)`,
  variant === 'icon' && tw`w-6 h-6 fill-current`
])

export default Button
