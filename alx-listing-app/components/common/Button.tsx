// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '@/interfaces'; // Assuming your interfaces file is at @/interfaces

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;