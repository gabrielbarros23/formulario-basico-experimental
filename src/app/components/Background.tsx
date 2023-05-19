'use client'

export function Background({ children }: any) {
  return (
    <div className=" from-custom-green to-blue-500 bg-gradient-to-br flex min-h-screen flex-col items-center justify-center dark:from-black dark:to-[#602588] dark:via-[#261b38] px-2 sm:px-0 overflow-y-hidden">
      {children}
    </div>
  )
}
