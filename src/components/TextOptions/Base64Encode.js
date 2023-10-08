import React from 'react';
import TooltipButton from '../TooltipButton';

function Base64Encode({ inputText, applyOption }) {
  const handleEncode = () => {
    const resultText = btoa(unescape(encodeURIComponent(inputText)));
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleEncode} tooltipContent="Click to encode text to Base64">
      Encode to Base64
    </TooltipButton>
  );
}

export default Base64Encode;
