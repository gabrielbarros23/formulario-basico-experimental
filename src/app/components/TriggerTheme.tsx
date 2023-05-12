export function TriggerTheme() {
  return (
    <label
      htmlFor="check"
      className="border w-20 h-10 rounded-full bg-white relative peer-checked:bg-black"
    >
      <input type="checkbox" id="check" className="sr-only peer" />
      <span className="w-7 h-7 rounded-full bg-black absolute top-1 left-2 peer-checked:left-10  box-border from-custom-green to-blue-500 bg-gradient-to-br transition-all duratio-500" />
    </label>
  )
}
