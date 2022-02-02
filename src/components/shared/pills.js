import React from 'react'
import tw, { styled } from 'twin.macro'

const Pills = ({ items }) => {
  return (
    (items || []).map(item => (
      <Pill key={item} category={item}>
        {item}
      </Pill>
    ))
  )
}

const Pill = styled.span(() => [
  tw`text-2xl inline-flex items-center`,
  tw`px-4 h-10 m-1 mr-2.5 rounded-md first-of-type:ml-0`,
])

export default Pills
