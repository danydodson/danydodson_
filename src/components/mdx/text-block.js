import React from 'react'
import tw, { styled } from 'twin.macro'
import { Icon } from '../icons'

const TextBlock = ({ theme, children }) => {
  let icon

  switch (theme) {
    case 'success':
      icon = <Icon name='Star' />
      break
    case 'warning':
      icon = <Icon name='Moon' />
      break
    case 'danger':
      icon = <Icon name='Sun' />
      break
    default:
      icon = <Icon name='Sun' />
  }

  return (
    <Text>
      <IconWrap theme={theme}>
        {icon}
      </IconWrap>
      {children}
    </Text>
  )
}

const Text = styled.div(({ variant, isDark }) => [
  tw`relative border-l-2 my-8 mx-4 py-8 px-5 rounded`,
  tw`border`
])

const IconWrap = styled.div(({ variant, isDark }) => [
  tw`absolute pt-md pl-md rounded-[50%]`,
])

export default TextBlock