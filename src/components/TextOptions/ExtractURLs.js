import React from 'react';
import TooltipButton from '../TooltipButton'; // Adjust the import path as needed

function ExtractURLs({ inputText, applyOption }) {
  const handleExtractURLs = () => {
    const urlRegex = /(?:https?:\/\/)?(?:[\w]+\.)?[a-zA-Z0-9-]+\.[a-z]{2,6}(?:\/(?:\S)*)?/g;
    const urls = inputText.match(urlRegex) || [];
    const resultText = urls.join('\n');
    
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleExtractURLs} tooltipContent="Click to extract URLs from the text">
      Extract URLs
    </TooltipButton>
  );
}

export default ExtractURLs;
