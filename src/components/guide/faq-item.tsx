"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "../common/button";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 last:border-b-0">
      <Button
        color="none"
        className="flex justify-between items-center w-full py-4 text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="p-3 text-sm text-gray-700">{answer}</div>
      </div>
    </div>
  );
}
