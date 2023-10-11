import React from 'react';
import TooltipButton from '../TooltipButton';

function RemoveDuplicateLines({ inputText, applyOption }) {
  const handleRemoveDuplicates = () => {
    const lines = inputText.split("\n");
    const uniqueLines = [...new Set(lines)];
    const resultText = uniqueLines.join("\n");
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleRemoveDuplicates} tooltipContent="Click to remove duplicate lines">
      Remove Duplicate Lines
    </TooltipButton>
  );
}

export default RemoveDuplicateLines;
