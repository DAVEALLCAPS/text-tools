import React from 'react';

function CopyButton({ textToCopy }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    alert('Text copied to clipboard');
  };

  return (
    <button onClick={handleCopy} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md">
      Copy to Clipboard
    </button>
  );
}

export default CopyButton;
