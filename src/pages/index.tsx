import loginBg from "../../public/login-bg.jpg"

export default function Home(){
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${loginBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-[#111418]/90 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full px-4">

      </div>
    </div>
  )
}