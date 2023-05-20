'use client'

import {
  InputsValidationRegister,
  InputsValidationLogin,
} from '../utils/SubmitValidation'
import { toast } from 'react-toastify'
import { useInputValueContext } from '../Hooks/InputValueContext'

type SubmitFunction = 'Register' | 'Login'

interface ButtonProps {
  text: string
  submitFunction: SubmitFunction
}

export function ButtonSubmit({ submitFunction, text }: ButtonProps) {
  const { name, password, passwordRepeat } = useInputValueContext()

  function handleSubmit(e: any) {
    e.preventDefault()

    switch (submitFunction) {
      case 'Register':
        handleRegister()
        break
      case 'Login':
        handleLogin()
        break
    }
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
