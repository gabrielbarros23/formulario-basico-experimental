'use client'

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export function AsideMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuIconAnimation, setMenuIconAnimation] = useState('')
  const [exitIconAnimation, setExitIconAnimation] = useState({})

  function handleMenuIconSwitchAnimation() {
    setMenuIconAnimation('slide-out-left')
    setTimeout(() => {
      setMenuOpen(true)
    }, 50)
    setExitIconAnimation('slide-in-left-1')
  }

  function handleExitIconSwitchAnimation() {
    setExitIconAnimation('slide-out-left')
    setTimeout(() => {
      setMenuOpen(false)
    }, 50)
    setMenuIconAnimation('slide-in-left-1')
  }

  return (
    <div className="h-full relative">
      {!menuOpen && (
        <button
          className=" switch-exit"
          onClick={handleMenuIconSwitchAnimation}
        >
          <AiOutlineMenu className={` w-10 h-20 ${menuIconAnimation}`} />
        </button>
      )}

      {menuOpen && (
        <div className="h-screen absolute bg-white -left-2 -top-0 w-60 pt-16 slide-in-left  dark:text-white dark:bg-zinc-700">
          <button
            onClick={handleExitIconSwitchAnimation}
            className="absolute left-2 top-5"
          >
            <AiOutlineClose className={`h-10 w-10 ${exitIconAnimation} `} />
          </button>
          <div className="w-full flex justify-end items-center"></div>
          <li className="list-none flex flex-col ">
            <ul className="slide-in-left-1half border-black px-3 h-10 flex items-center border-b">
              <a href="">Criar Conta </a>
            </ul>
            <ul className=" slide-in-left-2 border-black px-3 h-10 flex items-center border-b">
              <a href="">Entrar</a>
            </ul>
            <ul className="slide-in-left-2half border-black px-3 h-10 flex items-center border-b">
              <a href="">Sobre</a>
            </ul>
          </li>
        </div>
      )}
    </div>
  )
}
