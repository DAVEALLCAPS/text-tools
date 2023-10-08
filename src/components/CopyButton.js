import React from 'react';
import TooltipButton from './TooltipButton'; // Adjust the import path as needed

function CopyButton({ textToCopy }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <TooltipButton onClick={handleCopy} tooltipContent="Click to copy text to clipboard" className="bg-red-600 hover:bg-red-700">
      Copy to Clipboard
    </TooltipButton>
  );
}

export default CopyButton;
