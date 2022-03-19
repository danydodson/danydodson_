import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../shared'
import { Icon } from '../icons'

const ScrollUp = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (!visible && window.pageYOffset > 300) {
        setVisible(true)
      }
      else if (visible && window.pageYOffset <= 300) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [visible])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    visible && (
      <Button
        css={styles.button()}
        onClick={scrollToTop}
        aria-label='Scroll to top of page'
      >
        <Icon name='Up' />
      </Button>
    )
  )
}

const styles = {
  button: () => [
    tw`bg-secondary text-secondary`,
    tw`fixed opacity-50 bottom-4 right-4 h-6 w-6 z-10`,
  ]
}

export default ScrollUp