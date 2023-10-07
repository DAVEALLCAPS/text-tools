import React from 'react';

function OutputTextBox({ outputText }) {
  return (
    <textarea
      value={outputText}
      readOnly
      placeholder="Output will be displayed here..."
      className="w-full h-32 p-2 bg-gray-700 text-white rounded-md"
    />
  );
}

export default OutputTextBox;
