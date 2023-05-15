import { Background } from './components/Background'
import { Header } from './components/Header'
import { ButtonSubmit } from './components/ButtonSubmit'
import { Input } from './components/Input'

export default function Home() {
  return (
    <Background>
      <Header />

      <form className=" w-[28rem] h-[32rem] bg-white flex gap-8 flex-col items-center p-10 rounded-3xl dark:bg-[#2f2f2f]">
        <h1 className="text-3xl w-full h-14 flex justify-center items-start">
          Crie Sua Conta
        </h1>

        <Input field="Name" textLabel="Nome" type="text" />

        <Input field="Password" textLabel="Senha" type="password" />

        <Input field="PasswordRepeat" textLabel="Senha" type="password" />

        <ButtonSubmit text="Finalizar" submitFunction="Register" />

        <a href="/login" className="text-blue-600">
          Já tenho uma conta
        </a>
      </form>
    </Background>
  )
}
