'use client'

import { toast } from 'react-toastify'
import { useInputValueContext } from '../Hooks/InputValueContext'

interface ButtonProps {
  text: string
  submitFunction: 'Register' | 'Login'
}

export function ButtonSubmit({ submitFunction, text }: ButtonProps) {
  const { name, password, passwordRepeat } = useInputValueContext()
  function handleSubmit(e: any) {
    e.preventDefault()

    try {
      inputsValidation()
    } catch {
      return
    }

    const account = {
      name,
      password,
      passwordRepeat,
    }
    localStorage.setItem('account', JSON.stringify(account, null, 2))

    return toast.success('Conta criada com sucesso')
  }

  function inputsValidation() {
    if (!name) {
      throw toast.error('Coloque seu nome')
    }

    if (!password || !passwordRepeat) {
      throw toast.error('Coloque uma senha')
    }

    if (password !== passwordRepeat) {
      throw toast.error('As senhas não são iguais')
    }

    if (password.length < 6) {
      throw toast.error('A senha deve ter no mínimo 6 caracteres')
    }
  }
  return (
    <div className="w-60 h-14 from-custom-green to-blue-500 bg-gradient-to-br rounded-lg overflow-hidden dark:from-black dark:to-[#602588] dark:via-[#261b38]">
      <button
        className="w-full h-full flex justify-center items-center text-2xl text-white "
        onClick={(e) => handleSubmit(e)}
      >
        {text}
      </button>
    </div>
  )
}
