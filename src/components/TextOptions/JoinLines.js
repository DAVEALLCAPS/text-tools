import React from 'react';
import TooltipButton from '../TooltipButton';

function JoinLines({ inputText, applyOption }) {
  const handleJoinLines = () => {
    const resultText = inputText.split("\n").join(" ");
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleJoinLines} tooltipContent="Click to join lines into a single line">
      Join Lines
    </TooltipButton>
  );
}

export default JoinLines;
