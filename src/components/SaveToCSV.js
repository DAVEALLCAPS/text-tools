import React from 'react';
import { saveAs } from 'file-saver';
import TooltipButton from './TooltipButton';

function SaveToCSV({ text }) {
  const handleSaveCSV = () => {
    const formattedText = text.split('\n').join(',');
    const blob = new Blob([formattedText], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'output.csv');
  };

  return (
    <TooltipButton onClick={handleSaveCSV} tooltipContent="Click to save text to a .csv file" className="bg-red-600 hover:bg-red-700">
      Save to CSV
    </TooltipButton>
  );
}

export default SaveToCSV;
