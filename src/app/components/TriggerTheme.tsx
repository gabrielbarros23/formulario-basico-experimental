'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useThemeContext } from '../Hooks/ThemeContext'

export function TriggerTheme() {
  const { getThemeInLocalStorage } = useThemeContext()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  function handleThemeSwitch() {
    if (theme === 'system' || theme === 'white') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
    if (theme === 'dark') {
      setTheme('white')
      localStorage.setItem('theme', 'white')
    }
  }

  useEffect(() => {
    setTheme(getThemeInLocalStorage())
    setMounted(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label
      htmlFor="check"
      className="border w-20 h-10 rounded-full bg-white relative peer-checked:bg-black"
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        onChange={() => handleThemeSwitch()}
      />
      <span className="w-7 h-7 rounded-full bg-black absolute top-1 left-2 peer-checked:left-10  box-border from-custom-green to-blue-500 bg-gradient-to-br transition-all duration-500 dark:from-black dark:to-[#602588] dark:via-[#261b38]" />
    </label>
  )
}
