import { ButtonSubmit } from '../components/ButtonSubmit'
import { Input } from '../components/Input'
import { Form } from '../components/Form'
import { Background } from '../components/Background'
import { Header } from '../components/Header'
import Link from 'next/link'

export default async function login() {
  return (
    <Background>
      <Header />

      <Form>
        <h1 className="text-3xl w-11/12 h-14 flex justify-center items-start min-w-[120px]">
          Entrar na Conta
        </h1>

        <Input field="Name" textLabel="Nome" type="text" />

        <Input field="Password" textLabel="Senha" type="password" />

        <ButtonSubmit text="Entrar" submitFunction="Login" />

        <Link href="/" className="text-blue-600 dark:text-blue-500">
          Criar conta
        </Link>
      </Form>
    </Background>
  )
}
