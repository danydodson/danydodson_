import tw, { styled } from 'twin.macro'

const Button = styled.button(({ isLayout }) => [
  tw`flex items-center p-1 rounded`,
  tw`fill-[var(--text-secondary)]`,
  tw`hover:(scale-105 fill-[var(--text-tertiary)])`,
  tw`focus:outline-none`,
  tw`transform transition-transform duration-75`,
  isLayout ? tw`text-sm` : tw`text-lg`,
])

export default Button
