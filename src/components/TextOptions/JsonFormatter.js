import React from 'react';
import TooltipButton from '../TooltipButton';

function JsonFormatter({ inputText, applyOption }) {
  const handleJsonFormat = () => {
    try {
      const parsed = JSON.parse(inputText);
      const formatted = JSON.stringify(parsed, null, 2);
      applyOption(formatted);
    } catch (error) {
      console.error("Invalid JSON");
      alert("Please provide a valid JSON string");
    }
  };

  return (
    <TooltipButton onClick={handleJsonFormat} tooltipContent="Click to format JSON string">
      Format JSON
    </TooltipButton>
  );
}

export default JsonFormatter;
