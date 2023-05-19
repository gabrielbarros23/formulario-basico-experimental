'use client'

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { MenuModal } from './MenuModal'
import Link from 'next/link'

export function AsideMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [menuIconAnimation, setMenuIconAnimation] = useState('')
  const [menuAnimation, setMenuAnimation] = useState('')

  function handleMenuIconSwitchAnimation() {
    setMenuIconAnimation('slide-out-left')
    setMenuAnimation('slide-in-left')
    setMenuOpen(true)
  }

  function handleExitIconSwitchAnimation() {
    setMenuAnimation('slide-out-left')
    setTimeout(() => {
      setMenuOpen(false)
    }, 500)
    setMenuIconAnimation('slide-in-left')
  }

  return (
    <div className="h-full relative">
      <button className=" switch-exit" onClick={handleMenuIconSwitchAnimation}>
        <AiOutlineMenu className={` w-10 h-20 ${menuIconAnimation}`} />
      </button>

      {menuOpen && (
        <div
          className={`h-screen absolute bg-white -left-10 -top-0 w-60 pt-16 z-10 ${menuAnimation}  dark:text-white dark:bg-zinc-700`}
        >
          <button
            onClick={handleExitIconSwitchAnimation}
            className="absolute left-2 top-5"
          >
            <AiOutlineClose className={`h-10 w-10 slide-in-left-delay-1 `} />
          </button>
          <div className="w-full flex justify-end items-center"></div>
          <li className="list-none flex flex-col ">
            <ul className="slide-in-left-delay-2 border-black px-3 h-10 flex items-center border-b">
              <Link href="/">Criar Conta </Link>
            </ul>
            <ul className=" slide-in-left-delay-3 border-black px-3 h-10 flex items-center border-b">
              <Link href="/login">Entrar</Link>
            </ul>
            <ul className="slide-in-left-delay-4 border-black px-3 h-10 flex items-center border-b">
              <button onClick={() => setModalIsOpen(true)}>Sobre</button>
            </ul>
          </li>
        </div>
      )}

      {modalIsOpen && (
        <MenuModal onRequestClose={() => setModalIsOpen(false)} />
      )}
    </div>
  )
}
