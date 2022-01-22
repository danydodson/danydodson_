import React from 'react'
import TextBlock from './text-block'

const Danger = ({ children, padding }) => (
  <TextBlock theme='danger' children={children} padding={padding} />
)

export default Danger
