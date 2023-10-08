import React from 'react';
import TooltipButton from '../TooltipButton';

function ExtractEmails({ inputText, applyOption }) {
  const handleExtractEmails = () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    const emails = inputText.match(emailRegex) || [];
    const resultText = emails.join('\n');
    
    applyOption(resultText);
  };

  return (
    <TooltipButton onClick={handleExtractEmails} tooltipContent="Click to extract emails from the text">
      Extract Emails
    </TooltipButton>
  );
}

export default ExtractEmails;
