import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:pointer-events-none ring-offset-background
        bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 