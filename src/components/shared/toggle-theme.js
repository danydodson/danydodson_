import React, { useContext, useEffect, useState } from 'react'
import tw from 'twin.macro'
import { ThemeContext } from '../../styles'
import { Button } from '.'
import { Icon } from '../icons'

const ToggleTheme = () => {
  const [visible, setVisible] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

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

  function isDark() {
    return theme === 'dark'
  }

  return (
    visible && (
      <Button
        css={styles.button()}
        onClick={() => setTheme(isDark() ? 'light' : 'dark')}
        aria-label='Toggle Theme'
      >
        {isDark() ? <Icon name='Moon' /> : <Icon name='Sun' />}
      </Button>
    )
  )
}

const styles = {
  button: () => [
    tw`bg-secondary text-secondary`,
    tw`fixed opacity-50 bottom-8 left-2 h-7 w-7 z-10`,
  ]
}

export default ToggleTheme
