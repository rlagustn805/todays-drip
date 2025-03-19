import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple";
  className?: string;
  children: ReactNode;
}
