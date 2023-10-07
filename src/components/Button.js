import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded-md">
      {children}
    </button>
  );
}

export default Button;
