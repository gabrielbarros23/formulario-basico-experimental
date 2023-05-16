import { AiOutlineClose } from 'react-icons/ai'
import ReactModal from 'react-modal'

interface ModalProps {
  onRequestClose: () => void
}

export function MenuModal({ onRequestClose }: ModalProps) {
  return (
    <ReactModal
      isOpen
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
    >
      <button onClick={onRequestClose} className="text-black w-10 h-10">
        <AiOutlineClose className={'text-black w-10 h-10'} />
      </button>
      <h1 className="text-black text-4xl mt-5">
        Essa pequena aplicação foi feita apenas para testar algumas animações e
        bibliotecas por exemplo:
      </h1>

      <li className="text-black text-3xl list-none flex flex-col gap-3 mt-10">
        <ul>
          <a
            href="https://reactcommunity.org/react-modal/"
            className="text-blue-500"
          >
            React Modal
          </a>
        </ul>
        <ul>
          <a
            href="https://fkhadra.github.io/react-toastify/introduction/"
            className="text-blue-500"
          >
            React Toastify
          </a>
        </ul>
        <ul>
          <a
            href="https://www.npmjs.com/package/next-themes"
            className="text-blue-500"
          >
            Next Themes
          </a>
        </ul>
      </li>
    </ReactModal>
  )
}
