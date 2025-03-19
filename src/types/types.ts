import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple";
  className?: string;
  children: ReactNode;
}

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
}
