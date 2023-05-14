'use client'

import { createContext, useContext, useState } from 'react'

interface InputValueContextProps {
  name: string
  setName: (name: string) => void
  password: string
  setPassword: (password: string) => void
  passwordRepeat: string
  setPasswordRepeat: (passwordRepeat: string) => void
  handleChangeValueInput: (field: string, value: string) => void
  handleValueInput: (field: string) => string
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

  const handleValueInput = (field: string) => {
    if (field === 'Name') {
      return name
    }
    if (field === 'Password') {
      return password
    }
    if (field === 'PasswordRepeat') {
      return passwordRepeat
    }
    return ''
  }

  const handleChangeValueInput = (field: string, value: string) => {
    if (field === 'Name') {
      return setName(value)
    }
    if (field === 'Password') {
      return setPassword(value)
    }
    if (field === 'PasswordRepeat') {
      return setPasswordRepeat(value)
    }
  }

  return (
    <InputValueProvider.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
        handleChangeValueInput,
        handleValueInput,
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
