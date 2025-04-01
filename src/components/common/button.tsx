import { ButtonType } from "@/types/types";

export default function Button({
  color = "purple",
  className = "",
  children,
  ...props
}: ButtonType) {
  const baseStyles =
    "text-sm px-3 py-2 rounded-lg cursor-pointer disabled:opacity-50";

  const colorStyles = {
    purple: "text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
    gray: "bg-gray-300 text-black hover:bg-gray-200 active:bg-gray-100",
    transparency: "hover:bg-gray-200",
    black: "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700",
    none: "",
    red: "text-white bg-red-400 hover:bg-red-500 active:bg-red-600",
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
