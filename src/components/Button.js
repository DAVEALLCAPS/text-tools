import React from 'react';

function Button({ onClick, children, className }) {
  const combinedClassName = `px-2 py-1 rounded-md ${className || 'bg-blue-600 hover:bg-blue-700'}`;
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

export default Button;
