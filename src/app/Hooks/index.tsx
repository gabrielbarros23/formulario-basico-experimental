'use client'

import { ReactNode, createContext } from 'react'
import { CreateToastProvider } from '.././Hooks/ToastContext'
import { CreateInputValueProvider } from '.././Hooks/InputValueContext'
import { CreateThemeProviderContext } from '.././Hooks/ThemeContext'

const HooksContextProvider = createContext({})

export function CreateHooksContextProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <HooksContextProvider.Provider value={{}}>
      <CreateThemeProviderContext>
        <CreateToastProvider>
          <CreateInputValueProvider>{children}</CreateInputValueProvider>
        </CreateToastProvider>
      </CreateThemeProviderContext>
    </HooksContextProvider.Provider>
  )
}
