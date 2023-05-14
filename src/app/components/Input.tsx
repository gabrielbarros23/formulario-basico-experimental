'use client'

import { useInputValueContext } from '../Hooks/InputValueContext'

interface InputProps {
  textLabel: 'Nome' | 'Senha'
  type: 'text' | 'password'
  field: 'Name' | 'Password' | 'PasswordRepeat'
}

export function Input({ textLabel, type, field }: InputProps) {
  const { handleChangeValueInput, handleValueInput } = useInputValueContext()

  return (
    <div className="border border-gray-400 rounded-md h-12 w-full relative">
      <input
        type={type}
        name={field}
        value={handleValueInput(field)}
        onChange={(value) => handleChangeValueInput(field, value.target.value)}
        className="rounded-md w-full h-full peer"
      />
      <label
        htmlFor={field}
        className="absolute top-2.5 left-2 peer-hover:text-black transition-all duration-500 peer-focus:-top-7 peer-focus:left-0"
      >
        {textLabel}
      </label>
    </div>
  )
}
