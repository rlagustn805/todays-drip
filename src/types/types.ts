import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "purple" | "gray" | "transparency" | "black" | "none" | "red";
  className?: string;
  children: ReactNode;
}

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  className?: string;
}

export interface CommentsHandleType {
  id: number;
  mode?: string;
  handleMode: (mode: string) => void;
}

export interface CommentsType {
  id: number;
  nickname: string;
  content: string;
  likes: number;
  liked: boolean;
  created_at: string;
}

export interface TodayCommentsType {
  topComments?: CommentsType[];
  recentComments?: CommentsType[];
  success?: boolean;
  currentPage?: number;
  totalCount?: number;
  totalPages?: number;
}

export interface PaginationType {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}
