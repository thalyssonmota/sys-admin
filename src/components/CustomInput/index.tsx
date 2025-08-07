import { useState } from "react";
import { GoLock } from "react-icons/go";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  type: "text" | "password" | "email";
  required?: boolean;
  icon?: React.ReactNode;
}

export default function CustomInput({
  label,
  placeholder,
  type,
  required,
  icon,
}: CustomInputProps) {
  const [ShowPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword(!ShowPassword);
  }

  return (
    <div className="space-y-2">
      <label htmlFor={type} className="text-sm font-medium text-[#f1f2f3]">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type={ShowPassword ? "text" : type}
          id={type}
          placeholder={placeholder}
          required={required}
          className={`
            ${
              (icon && type === "password" && "px-10") ||
              (icon && type !== "password" && "pl-10") ||
              (!icon && "px-3")
            } 
          bg-[#21252b80] border border-[#2c313a]/50 focus:border-[#5593f7] rounded-md py-2 h-10 flex w-full placeholder:text-gray-500 outline-none text-[#f1f2f3] transition-colors duration-200 focus:ring-2 focus:ring-[#5593f7]/20 mt-2`}
        />
        {type === "password" && (
          <div
            onClick={handleShowPassword}
            className="absolute text-gray-400 right-3 top-1/2 transform -translate-y-1/2 text-[20px] cursor-pointer"
          >
            {ShowPassword ? <IoEye /> : <IoEyeOff />}
          </div>
        )}
      </div>
    </div>
  );
}
