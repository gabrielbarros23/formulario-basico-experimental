'use client'

import { createContext, useContext, useState } from 'react'

type HandleChangeValueInput = (field: string, value: string) => void
type HandleValueInput = (field: string) => string

type InputValueContextProps = {
  name: string
  setName: (name: string) => void
  password: string
  setPassword: (password: string) => void
  passwordRepeat: string
  setPasswordRepeat: (passwordRepeat: string) => void
  handleChangeValueInput: HandleChangeValueInput
  handleValueInput: HandleValueInput
}

const InputValueProvider = createContext<InputValueContextProps>({
  name: '',
  setName: () => {},
  password: '',
  setPassword: () => {},
  passwordRepeat: '',
  setPasswordRepeat: () => {},
  handleChangeValueInput: () => {},
  handleValueInput: () => {
    return ''
  },
})

export function CreateInputValueProvider({ children }: any) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleValueInput: HandleValueInput = (field: string) => {
    switch (field) {
      case 'Name':
        return name
      case 'Password':
        return password
      case 'PasswordRepeat':
        return passwordRepeat
      default:
        return ''
    }
  }

  const handleChangeValueInput: HandleChangeValueInput = (
    field: string,
    value: string,
  ) => {
    switch (field) {
      case 'Name':
        setName(value)
        break

      case 'Password':
        setPassword(value)
        break

      case 'PasswordRepeat':
        setPasswordRepeat(value)
        break
    }
  }

  return (
    <InputValueProvider.Provider
      value={{
        handleChangeValueInput,
        handleValueInput,
        name,
        setName,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
      }}
    >
      {children}
    </InputValueProvider.Provider>
  )
}

export function useInputValueContext() {
  const context = useContext(InputValueProvider)

  return context
}
