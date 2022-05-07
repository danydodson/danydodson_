import tw, { styled, css } from 'twin.macro'

const Button = styled.button(({ isPrimary, isSecondary, icon, isSmall }) => [
  tw`fill-[var(--text-secondary)] text-lg rounded focus:outline-none`,
  tw`transform transition-transform duration-75`,

  tw`hover:(scale-105 fill-[var(--text-tertiary)])`,

  isPrimary && tw`hover:(scale-105 fill-[var(--text-primary)])`,

  isSecondary && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`hover:(scale-105 fill-[var(--text-primary)])`,
  ],

  isSmall ? tw`text-sm` : tw`text-lg`,
])

export default Button
