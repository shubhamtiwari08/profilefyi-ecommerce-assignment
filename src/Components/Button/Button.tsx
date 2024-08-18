import React from "react";
import { ButtonProps } from "../../libs/types";

const Button: React.FC<ButtonProps> = ({ children,color,onClick }) => {
  return (
    <button className={`flex items-center justify-center w-full px-4 py-2 text-white transition-all duration-700 ease-in-out transform scale-100 opacity-100 ${ color === "primary" ? "bg-yellow-500 hover:bg-yellow-600" :"bg-orange-500 hover:bg-orange-600"}`} onClick={onClick} >
      {children}
    </button>
  );
};

export default Button;
