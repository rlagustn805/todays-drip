import { ButtonType } from "@/types/types";

export default function Button({
  color = "purple",
  className = "",
  children,
  ...props
}: ButtonType) {
  const baseStyles = "p-2 rounded-lg cursor-pointer disabled:opacity-50";

  const colorStyles = {
    purple: "text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
    gray: "bg-gray-300 text-black",
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${colorStyles[color]} ${className}`}
      {...props}>
      {children}
    </button>
  );
}
