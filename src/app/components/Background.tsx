'use client'

export function Background({ children }: any) {
  return (
    <div className=" from-custom-green to-blue-500 bg-gradient-to-br flex min-h-screen flex-col items-center justify-center ">
      {children}
    </div>
  )
}
