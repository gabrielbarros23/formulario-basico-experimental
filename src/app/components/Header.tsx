import { TriggerTheme } from './TriggerTheme'
import { AsideMenu } from './AsideMenu'

export function Header() {
  return (
    <div className="w-full h-20 flex justify-between px-2  absolute top-0 items-center">
      <AsideMenu />

      <TriggerTheme />
    </div>
  )
}
