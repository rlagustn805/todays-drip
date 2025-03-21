import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { Tables } from "@/types/supabase";

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

export type CommentType = Pick<
  Tables<"comments">,
  "id" | "nickname" | "content" | "likes" | "created_at"
>;

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
