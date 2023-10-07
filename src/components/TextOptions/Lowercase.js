import React from 'react';
import Button from '../Button';

function Lowercase({ inputText, applyOption }) {
  const handleLowercase = () => {
    const resultText = inputText.toLowerCase();
    applyOption(resultText);
  };

  return <Button onClick={handleLowercase}>Lowercase</Button>;
}

export default Lowercase;
