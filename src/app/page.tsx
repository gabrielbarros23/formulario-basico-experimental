import { ThemeProvider } from 'next-themes'
import { Background } from './components/Background'
import { Header } from './components/Header'

export default function Home() {
  return (
    <Background>
      <main className="box-border from-custom-green to-blue-500 bg-gradient-to-br flex min-h-screen border flex-col items-center justify-center ">
        <Header />

        <form className="border w-[28rem] h-[32rem] bg-white flex gap-8 flex-col items-center p-10 rounded-3xl">
          <h1 className="text-3xl w-full h-24 flex justify-center items-start">
            Crie Sua Conta
          </h1>

          <div className="border border-gray-400 rounded-md h-12 w-full relative">
            <input
              type="text"
              name="Name"
              className="rounded-md w-full h-full peer"
            />
            <label
              htmlFor="Name"
              className="absolute top-2.5 left-2 peer-hover:text-black transition-all duration-500 peer-focus:-top-7 peer-focus:left-0"
            >
              Nome
            </label>
          </div>

          <div className="border border-gray-400 rounded-md h-12 w-full relative">
            <input
              type="email"
              name="Email"
              className="rounded-md w-full h-full peer"
            />

            <label
              htmlFor="Email"
              className=" inline-block top-2.5 left-2 absolute  peer-focus:-top-7 peer-focus:left-0 transition-all duration-500"
            >
              Email
            </label>
          </div>

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
        </form>
      </main>
    </Background>
  )
}
