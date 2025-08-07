import { FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-[#121417] via-[#121417] to-[#181b2033] border border-[#2c313a]/50 backdrop-blur-xl rounded-lg text-gray-400">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#5593f7] to-[#1d4ed8] bg-clip-text text-transparent">Criar Conta</h2>
          <p className="text-gray-400">Preencha os dados para criar sua conta.</p>
        </div>
        <form
        onSubmit={(e) => {}}
        className="space-y-6"
        >
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

        </form>

        <button 
        type="submit"
        className="w-full h-[40px] text-center mt-4 py-2 px-4 text-white font-semibold bg-gradient-to-r from-[#5593f7] to-[#1d4ed8] rounded-lg hover:text-[#5593f7] transition duration-200 cursor-pointer ">
          Criar Conta
        </button>
      </div>
    </div>
  );
}
