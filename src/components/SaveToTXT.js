import React from 'react';
import { saveAs } from 'file-saver';
import TooltipButton from './TooltipButton';

function SaveToTXT({ text }) {
  const handleSaveTXT = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'output.txt');
  };

  return (
    <TooltipButton onClick={handleSaveTXT} tooltipContent="Click to save text to a .txt file" className="bg-red-600 hover:bg-red-700">
      Save to TXT
    </TooltipButton>
  );
}

export default SaveToTXT;
