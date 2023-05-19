export function Form({ children }: any) {
  return (
    <form className=" w-full bg-white flex gap-8 flex-col items-center p-10 rounded-3xl dark:bg-[#2f2f2f] sm:w-[28rem]">
      {children}
    </form>
  )
}
