'use client'

import { createContext, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider = createContext({})

export function CreateToastProvider({ children }: any) {
  return (
    <ToastProvider.Provider value={{}}>
      <ToastContainer />
      {children}
    </ToastProvider.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastProvider)

  return context
}
