'use client'

import { useState } from 'react'
import { useInputValueContext } from '../Hooks/InputValueContext'

interface InputProps {
  textLabel: 'Nome' | 'Senha'
  type: 'text' | 'password'
  field: 'Name' | 'Password' | 'PasswordRepeat'
}

export function Input({ textLabel, type, field }: InputProps) {
  const { handleChangeValueInput, handleValueInput } = useInputValueContext()
  const [labelStayInTopIfInputLength, setLabelStayInTopIfInputLength] =
    useState({})

  function handleOnChangeInput(value: string) {
    handleChangeValueInput(field, value)
    if (value.trim().length === 0) {
      setLabelStayInTopIfInputLength({})
    } else {
      setLabelStayInTopIfInputLength({ top: '-1.75rem', left: '0' })
    }
  }

  return (
    <div className="border border-gray-400 rounded-md h-12 w-full relative">
      <input
        type={type}
        name={field}
        value={handleValueInput(field)}
        onChange={(value) => handleOnChangeInput(value.target.value)}
        className="rounded-md w-full h-full peer pl-2"
      />
      <label
        htmlFor={field}
        className="absolute top-2.5 left-2 text-zinc-400 peer-focus:text-black peer-hover:text-black transition-all duration-500 peer-focus:-top-7 peer-focus:left-0 dark:peer-hover:text-white dark:peer-focus:text-white"
        style={labelStayInTopIfInputLength}
      >
        {textLabel}
      </label>
    </div>
  )
}
