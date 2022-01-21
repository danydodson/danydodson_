import React, { useState } from 'react'
import { styled } from 'twin.macro'
import Button from '../button'

const Collapsable = ({ children, title, titleSize = '1.25rem', defaultShow = false }) => {
  const [show, setShow] = useState(defaultShow)

  return (
    <div className='collapsable'>
      {
        title ?
          <StyledCollapsableTitleWrap titleSize={titleSize}>
            <Button onClick={() => setShow(!show)}>
              {title}
            </Button>
          </StyledCollapsableTitleWrap>
          : (
            <StyledCollapsableTitleWrap titleSize={titleSize}>
              <Button onClick={() => setShow(!show)}>
                {title}
              </Button>
            </StyledCollapsableTitleWrap>
          )
      }
      {
        show &&
        <div style={{ marginLeft: '1.2rem' }}>
          {children}
        </div>
      }
    </div>
  )
}


const StyledCollapsableTitleWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.titleSize};
  margin: 1rem 0;
  button {
    color: black;
  }
`

export default Collapsable