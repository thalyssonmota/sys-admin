import Link from "next/link";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { GrGoogle } from "react-icons/gr";
import { IoEye, IoEyeOff } from "react-icons/io5";
import CustomInput from "../CustomInput";

export default function LoginForm() {
  const [ShowPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!ShowPassword);
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-[#181b20cc] to-[#1d2025e6] backdrop-blur-lg border-[#2c313a]/50 shadow-[#181b1f]  rounded-lg">
        <div className="flex flex-col p-6 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] text-transparent bg-clip-text">
            Bem-vindo de volta!
          </h1>
          <p className="text-sm text-gray-400">
            Entre na sua conta para continuar
          </p>
        </div>
        <div className="pt-0 p-6 space-y-6">
          <form onSubmit={() => {}} className="space-y-4">
            <CustomInput
              label="Email"
              placeholder="seu@email.com"
              type="email"
              icon={<CiMail />}
              required={true}
            />
            <CustomInput
              label="Senha"
              placeholder="•••••••••"
              type="password"
              icon={<GoLock />}
              required={true}
            />
            <div className="flex items-center justify-between ">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-s-sm border border-[#2c313a]  text-[#5593f7]"
                />
                <span className="text-gray-400">Lembrar-me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] text-transparent bg-clip-text hover:text-[#1d4fdf] transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full h-[50px] bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] text-white text-xl font-semibold rounded-lg hover:shadow-lg hover:shadow-[#4896ff26] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Entrar
            </button>
          </form>
          <div className="w-full flex items-center justify-center">
            <hr className="w-[35%] h-[1px] bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] border-transparent" />
            <p className="w-[30%] text-sm text-center bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] text-transparent bg-clip-text font-medium">
              Ou continue com
            </p>
            <hr className="w-[35%] h-[1px] bg-gradient-to-r from-[#acc9f7] to-[#1d4fdf] border-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full h-10 flex items-center justify-center gap-3 bg-[#21252b] border border-[#2c313a] text-[#f1f2f3] text-lg font-semibold rounded-lg hover:bg-[#f15000] transition-all duration-300 ease-in-out cursor-pointer">
              <FiGithub size={20} color="#f1f2f3" />
              <p className="text-[#f1f2f3] text-lg">GitHub</p>
            </button>
            <button className="w-full h-10 flex items-center justify-center gap-3 bg-[#21252b] border border-[#2c313a] text-[#f1f2f3] text-lg font-semibold rounded-lg  hover:bg-[#4181ee] transition-all duration-300 ease-in-out cursor-pointer">
              <GrGoogle size={20} color="#f1f2f3" />
              <p className="text-[#f1f2f3] text-lg">Google</p>
            </button>
          </div>
          <div className="text-center text-sm text-gray-400 ">
            Não tem uma conta?
            <Link
              href="/register"
              className="text-[#5593f7] hover:text-[#1d4fdf] transition-colors ml-1 font-medium"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
