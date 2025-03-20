import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple" | "gray";
  className?: string;
  children: ReactNode;
}

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
}

export interface PaginationType {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}
