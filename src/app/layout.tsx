import './globals.css'
import { ReactNode } from 'react'
import { CreateHooksContextProvider } from './Hooks'

export const metadata = {
  title: 'Formulário',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <CreateHooksContextProvider>{children}</CreateHooksContextProvider>
      </body>
    </html>
  )
}
