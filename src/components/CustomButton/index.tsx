
type CustomButtonProps = {
  variant?: "primary",
  text?: string,
  type?: "button" | "submit" | "reset",
  className?: string
}


export default function CustomButton({
  variant,
  text,
  type = "button",
  className
}: CustomButtonProps){
  return(
    <button></button>
  )
}