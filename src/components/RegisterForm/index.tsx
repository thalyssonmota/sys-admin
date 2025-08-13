import { FiGithub, FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import CustomButton from "../CustomButton";
import { GrGoogle } from "react-icons/gr";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-[#121417] via-[#121417] to-[#181b2033] border border-[#2c313a]/50 backdrop-blur-xl rounded-lg text-gray-400">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#5593f7] to-[#1d4ed8] bg-clip-text text-transparent">
            Criar Conta
          </h2>
          <p className="text-gray-400">
            Preencha os dados para criar sua conta.
          </p>
        </div>
        <form onSubmit={(e) => {}} className="space-y-6">
          <CustomInput
            label="Nome Completo"
            type="text"
            placeholder="Seu Nome completo"
            required={true}
            icon={<FiUser />}
          />

          <CustomInput
            label="Email"
            type="email"
            placeholder="Seu@email.com"
            required={true}
            icon={<CiMail />}
          />

          <CustomInput
            label="Senha"
            type="password"
            placeholder="•••••••••"
            required={true}
            icon={<GoLock />}
          />

          <CustomInput
            label="Confirmar Senha"
            type="password"
            placeholder="•••••••••"
            required={true}
            icon={<GoLock />}
          />

          <CustomButton type="submit" className="h-[40px]">
            Criar Conta
          </CustomButton>

          <div className="w-full flex items-center justify-center">
            <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
            <p className="text-[12px] text-gray-400">OU</p>
            <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
          </div>

          <div className="space-y-3">
            <CustomButton 
              variant="outline" className="text-sm hover:bg-[#f9af32] ">
              <FiGithub size={20} />
              Continuar com GitHub
            </CustomButton>

            <CustomButton 
              variant="outline" className="text-sm hover:bg-[#4487f4] ">
              <GrGoogle size={20} />
              Continuar com Google
            </CustomButton>
          </div>

          <div className="text-center mt-6 flex items-center justify-center">
            <p className="text-sm text-gray-400">
              Já tem uma conta?
            </p>
            <Link href="/login" className="text-sm text-[#5593f7] hover:text-[#5593f7]/90 transition-colors ml-1 font-medium">
              Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
