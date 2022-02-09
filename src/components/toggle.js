import React, { useContext } from 'react'
import { ThemeContext } from '../styles'
import { Button, Icon } from '.'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <Button
      variant='icon'
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label='Toggle Theme'
    >
      {isDark() ? <Icon name='Moon' /> : <Icon name='Sun' />}
    </Button>
  )
}

export default Toggle
