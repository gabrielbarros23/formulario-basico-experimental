'use client'

import { toast } from 'react-toastify'
import { useInputValueContext } from '../Hooks/InputValueContext'
import {
  InputsValidationRegister,
  InputsValidationLogin,
} from '../utils/SubmitValidation'
import { useEffect, useState } from 'react'

interface ButtonProps {
  text: string
  submitFunction: 'Register' | 'Login'
}

export function ButtonSubmit({ submitFunction, text }: ButtonProps) {
  const [test, setTest] = useState(false)
  const { name, password, passwordRepeat } = useInputValueContext()

  function handleSubmit(e: any) {
    e.preventDefault()

    submitFunction === 'Register' ? handleRegister() : handleLogin()
  }

  function handleLogin() {
    try {
      InputsValidationLogin({ name, password })
    } catch {
      return
    }

    toast.success('Login feito com sucesso')
  }

  function handleRegister() {
    try {
      InputsValidationRegister({ name, password, passwordRepeat })
    } catch {
      return
    }

    const account = {
      name,
      password,
    }

    localStorage.setItem('account', JSON.stringify(account, null, 2))

    return toast.success('Conta criada com sucesso')
  }

  useEffect(() => {
    setTest(true)
  }, [])

  if (!test) {
    return null
  }

  return (
    <div className="w-4/5 sm:w-60 h-14 from-custom-green to-blue-500 bg-gradient-to-br rounded-lg overflow-hidden min-w-[120px] dark:from-black dark:to-[#602588] dark:via-[#261b38]">
      <button
        className="w-full h-full flex justify-center items-center text-2xl text-white "
        onClick={(e) => handleSubmit(e)}
      >
        {text}
      </button>
    </div>
  )
}
