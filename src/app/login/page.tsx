"use client";

import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button";
import Logo from '@/assets/img/2ncC1dvurR3fJhMX4i6Lz9ICt1X.svg'
import Link from "next/link";
import Image from 'next/image'

const Login = () => {
  const [reveledPassword, setReveledPassword] = useState(false);

  return (
    <div className="w-screen h-max-screen h-screen flex justify-center items-center">
      <form className=" border border-gray-300 bg-gray-100 text-gray-800 w-full h-full px-14 py-32 rounded-md shadow-md flex flex-col justify-center align-center gap-20 dark:bg-gray-900 dark:text-gray-50 dark:shadow-xl 2xl:w-4/12 xl:w-6/12 lg:w-6/12 lg:max-h-[40rem] md:w-3/5 md:max-h-[40rem]">
        <h1 className="text-4xl font-bold text-center">Logar</h1>
        <div className="text-zinc-700 flex flex-col gap-6">
          <div className="w-full h-14 relative">
            <InputComponent
              name="name"
              text="Nome"
              bgColor="bg-gray-50"
              typeInput="text"
            />
          </div>
          <div className="w-full h-14 relative">
            <InputComponent
              name="password"
              text="Senha"
              bgColor="bg-gray-50"
              typeInput={reveledPassword ? "text" : "password"}
            />
            <span className="mr-2 absolute right-0 translate-y-[-50%] top-2/4">
              {reveledPassword ? (
                <PiEyeSlash
                  className="text-lg cursor-pointer"
                  onClick={() => setReveledPassword(!reveledPassword)}
                />
              ) : (
                <PiEye
                  className="text-lg cursor-pointer"
                  onClick={() => setReveledPassword(!reveledPassword)}
                />
              )}
            </span>
            <span className="text-gray-800 text-xs text-gray-50 cursor-pointer select-none hover:text-purple-500 dark:text-gray-50 dark:hover:text-purple-300">
              Eu esqueci minha senha
            </span>
          </div>
        </div>
        <div>
          <ButtonComponent
            text="Login"
            bgColor="bg-purple-400"
            darkBgColor="bg-purple-500"
            textColor=""
            hoverBgColor="bg-transparent"
            hoverDarkBgColor="bg-purple-600"
            buttonSubmit={true}
          />

          <p className="text-gray-800 text-sm text-gray-50 select-none mt-4 dark:text-gray-50">
            {`Não possui uma conta? `}
            <Link href="/cadastrar-se">
              <span className="cursor-pointer hover:text-purple-500 dark:hover:text-purple-300">
                Cadastrar-se
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
