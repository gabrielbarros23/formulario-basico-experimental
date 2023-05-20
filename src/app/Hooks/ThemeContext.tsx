'use client'

import { createContext, useContext } from 'react'
import { ThemeProvider } from 'next-themes'

type GetThemeInLocalStorage = () => string

interface ThemeContextProps {
  getThemeInLocalStorage: GetThemeInLocalStorage
}

const ThemeProviderContext = createContext<ThemeContextProps>({
  getThemeInLocalStorage: () => '',
})

export function CreateThemeProviderContext({ children }: any) {
  const getThemeInLocalStorage: GetThemeInLocalStorage = () => {
    return localStorage.getItem('theme') || 'white'
  }

  return (
    <ThemeProviderContext.Provider value={{ getThemeInLocalStorage }}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ThemeProviderContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeProviderContext)

  return context
}
