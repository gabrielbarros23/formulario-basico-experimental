'use client'

import { toast } from 'react-toastify'

interface LoginInputs {
  name: string
  password: string
}

interface RegisterInputs {
  name: string
  password: string
  passwordRepeat: string
}

export function InputsValidationLogin({ name, password }: LoginInputs) {
  const { name: userName, password: userPassword } = JSON.parse(
    localStorage.getItem('account') || '',
  )

  if (!name) {
    throw toast.error('Coloque seu nome')
  }

  if (!password) {
    throw toast.error('Coloque uma senha')
  }

  if (password.length < 6) {
    throw toast.error('A senha deve ter no mínimo 6 caracteres')
  }

  if (userName !== name || userPassword !== password) {
    throw toast.error('Nome de usuário e/ou senha incorretos')
  }
}

export function InputsValidationRegister({
  name,
  password,
  passwordRepeat,
}: RegisterInputs) {
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
