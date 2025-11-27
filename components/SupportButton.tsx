"use client";

import { supportConfig } from '../config/support';

interface SupportButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SupportButton({ 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: SupportButtonProps) {
  
  const handleClick = () => {
    window.open(supportConfig.donationUrl, '_blank', 'noopener,noreferrer');
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50",
    outline: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label="Apoyar el proyecto Yellow o'clock"
    >
      <span className="text-xl">☕</span>
      <span>{supportConfig.buttonText}</span>
    </button>
  );
}
