import { ButtonType } from "@/types/types";

export default function Button({
  color = "purple",
  className = "",
  children,
  ...props
}: ButtonType) {
  const baseStyles = "text-white p-2 rounded-lg cursor-pointer";

  const colorStyles = {
    purple:
      "bg-purple-500  hover:bg-purple-600 active:bg-purple-700 disabled:bg-purple-300",
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
