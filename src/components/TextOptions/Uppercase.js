import React from 'react';
import TooltipButton from '../TooltipButton';

function Uppercase({ inputText, applyOption }) {
  const handleUppercase = () => {
    const resultText = inputText.toUpperCase();
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleUppercase} tooltipContent="Click to convert text to uppercase">
      Uppercase
    </TooltipButton>
  );
}

export default Uppercase;
