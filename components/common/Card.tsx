// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces'; // Assuming your interfaces file is at @/interfaces

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      {/* Add more card content here later */}
    </div>
  );
};

export default Card;