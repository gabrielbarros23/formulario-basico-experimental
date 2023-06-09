import { ButtonSubmit } from './components/ButtonSubmit'
import { Input } from './components/Input'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Background } from './components/Background'
import Link from 'next/link'

export default function Home() {
  return (
    <Background>
      <Header />

      <Form>
        <h1 className="text-3xl w-11/12 h-14 flex justify-center items-start text-center min-w-[118px]">
          Crie Sua Conta
        </h1>

        <Input field="Name" textLabel="Nome" type="text" />

        <Input field="Password" textLabel="Senha" type="password" />

        <Input field="PasswordRepeat" textLabel="Senha" type="password" />

        <ButtonSubmit text="Finalizar" submitFunction="Register" />

        <Link href="/login" className="text-blue-600 dark:text-blue-500">
          Já tenho uma conta
        </Link>
      </Form>
    </Background>
  )
}
