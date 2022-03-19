import React, { useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../shared'

const Collapsable = ({ children, title, titleSize = '1.25rem', defaultShow = false }) => {

  const [show, setShow] = useState(defaultShow)

  return (
    <div>
      {
        title ?
          <Title titleSize={titleSize}>
            <Button onClick={() => setShow(!show)}>
              {title}
            </Button>
          </Title>
          : (
            <Title titleSize={titleSize}>
              <Button onClick={() => setShow(!show)}>
                {title}
              </Button>
            </Title>
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

const Title = tw.div`flex items-center text-2xl my-4`

export default Collapsable