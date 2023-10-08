import React from 'react';
import TooltipButton from '../TooltipButton';

function Base64Decode({ inputText, applyOption }) {
  const handleDecode = () => {
    try {
      const resultText = decodeURIComponent(escape(atob(inputText)));
      applyOption(resultText);
    } catch (error) {
      alert('Invalid Base64 string');
    }
  };

  return (
    <TooltipButton onClick={handleDecode} tooltipContent="Click to decode Base64 text to normal text">
      Decode from Base64
    </TooltipButton>
  );
}

export default Base64Decode;
