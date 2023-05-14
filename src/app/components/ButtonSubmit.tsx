'use client'

import { toast } from 'react-toastify'
import { useInputValueContext } from '../Hooks/InputValueContext'

interface ButtonProps {
  text: string
  submitFunction: 'Register' | 'Login'
}

export function ButtonSubmit({ submitFunction, text }: ButtonProps) {
  const { name } = useInputValueContext()
  function handleToast(e: any) {
    e.preventDefault()
  }
  return (
    <div className="w-60 h-14 from-custom-green to-blue-500 bg-gradient-to-br rounded-lg overflow-hidden ">
      <button
        className="w-full h-full flex justify-center items-center text-2xl text-white"
        onClick={(e) => handleToast(e)}
      >
        {text}
      </button>
    </div>
  )
}
