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

export type CommentType = {
  id: number;
  nickname: string;
  content: string;
  likes: number;
  liked: boolean;
  created_at: string;
};

export interface CommentCardType {
  comment: CommentType;
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
}

export interface PaginationType {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}
