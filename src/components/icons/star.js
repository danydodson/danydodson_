import React from 'react'
import 'twin.macro'

const IconStar = () => (
  <a
    tw='w-32 mb-10 p-5 block opacity-60 hover:opacity-100'
    href='http://localhost:8000'
    target='_blank'
    rel='noopener noreferrer'
  >
    <StarSvg />
  </a>
)

export default IconStar

const StarSvg = (props) => (
  <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g fill='none' stroke='currentColor' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </g>
  </svg>
)