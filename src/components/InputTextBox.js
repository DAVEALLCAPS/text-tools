import React from 'react';

function InputTextBox({ inputText, setInputText }) {
  return (
    <textarea
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Enter text here..."
      className="w-full h-32 p-2 bg-gray-700 text-white rounded-md"
    />
  );
}

export default InputTextBox;
