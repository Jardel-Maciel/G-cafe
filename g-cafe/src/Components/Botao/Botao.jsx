// src/components/CustomButton.jsx
import React from "react";

export default function Botao({ label, link, type = "default" }) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md";

  const variants = {
    
    default: "bg-green-300 text-black hover:bg-green-400",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[type]}`}
    >
      {label}
    </a>
  );
}
