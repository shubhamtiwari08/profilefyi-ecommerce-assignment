import React from "react";
import { ButtonProps } from "../../libs/types";

const Button: React.FC<ButtonProps> = ({ children,color,onClick }) => {
  return (
    <button className={`flex items-center justify-center w-full px-4 py-2 text-white transition-all duration-700 ease-in-out transform scale-100 bg-${color}-500 opacity-100 hover:bg-${color}-600`} onClick={onClick} >
      {children}
    </button>
  );
};

export default Button;
