import { ReactNode } from 'react'

export function Background({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      flex min-h-screen flex-col items-center justify-center px-2 sm:px-0 overflow-y-hidden
      from-custom-green to-blue-500 bg-gradient-to-br 
      dark:from-black dark:to-[#602588] dark:via-[#261b38] `}
    >
      {children}
    </div>
  )
}
