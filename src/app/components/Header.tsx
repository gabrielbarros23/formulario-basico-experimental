import { AiOutlineMenu } from 'react-icons/ai'
import { TriggerTheme } from './TriggerTheme'

export function Header() {
  return (
    <div className="w-full h-20 flex justify-between px-2 border absolute top-0 items-center">
      <button className=" ">
        <AiOutlineMenu className=" w-10 h-20" />
      </button>

      <TriggerTheme />
    </div>
  )
}
