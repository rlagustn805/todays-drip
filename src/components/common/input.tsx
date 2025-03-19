import { InputType } from "@/types/types";

export default function Input({
  type = "text",
  placeholder = "",
  className = "",
  ...props
}: InputType) {
  const baseStyles = "border border-black p-2 rounded-lg";

  return (
    <input
      className={`${baseStyles} ${className}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
