import { Background } from './components/Background'
import { Header } from './components/Header'
import { ButtonSubmit } from './components/ButtonSubmit'
import { Input } from './components/Input'

export default function Home() {
  return (
    <Background>
      <Header />

      <form className="border w-[28rem] h-[32rem] bg-white flex gap-8 flex-col items-center p-10 rounded-3xl">
        <h1 className="text-3xl w-full h-14 flex justify-center items-start">
          Crie Sua Conta
        </h1>

        <Input field="Name" textLabel="Nome" type="text" />

        <div className="border border-gray-400 rounded-md h-12 w-full relative">
          <input
            type="password"
            name="Password"
            className="rounded-md w-full h-full  peer  "
          />
          <label
            htmlFor="Password"
            className="absolute top-2.5 left-2 transition-all duration-500 peer-focus:-top-7 peer-focus:left-0"
          >
            Senha
          </label>
        </div>

        <div className="border border-gray-400 rounded-md h-12 w-full relative">
          <input
            type="password"
            name="PasswordRepeat"
            className="rounded-md w-full h-full  peer  "
          />
          <label
            htmlFor="PasswordRepeat"
            className="absolute top-2.5 left-2 transition-all duration-500 peer-focus:-top-7 peer-focus:left-0"
          >
            Senha
          </label>
        </div>

        <ButtonSubmit text="Finalizar" submitFunction="Register" />

        <a href="/login" className="text-blue-600">
          Já tenho um a conta
        </a>
      </form>
    </Background>
  )
}
