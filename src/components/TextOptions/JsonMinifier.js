import React from 'react';
import TooltipButton from '../TooltipButton';

function JsonMinifier({ inputText, applyOption }) {
  const handleJsonMinify = () => {
    try {
      const parsed = JSON.parse(inputText);
      const minified = JSON.stringify(parsed);
      applyOption(minified);
    } catch (error) {
      console.error("Invalid JSON");
      alert("Please provide a valid JSON string");
    }
  };

  return (
    <TooltipButton onClick={handleJsonMinify} tooltipContent="Click to minify JSON string">
      Minify JSON
    </TooltipButton>
  );
}

export default JsonMinifier;
