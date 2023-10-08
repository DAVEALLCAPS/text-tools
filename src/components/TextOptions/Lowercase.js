import React from 'react';
import TooltipButton from '../TooltipButton';

function Lowercase({ inputText, applyOption }) {
  const handleLowercase = () => {
    const resultText = inputText.toLowerCase();
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleLowercase} tooltipContent="Click to convert text to lowercase">
      Lowercase
    </TooltipButton>
  );
}

export default Lowercase;
