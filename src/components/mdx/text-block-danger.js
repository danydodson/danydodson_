import React from 'react'
import { TextBlock } from '.'

const Danger = ({ children, padding }) => (
  <TextBlock theme='danger' children={children} padding={padding} />
)

export default Danger
