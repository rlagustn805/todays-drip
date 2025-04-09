import { forwardRef } from "react";
import { InputType } from "@/types/types";

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ type = "text", placeholder = "", className = "", ...props }, ref) => {
    const baseStyles = "border border-black p-2 rounded-lg";

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${className}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; // React DevTools에서 이름 표시용

export default Input;
