import React from 'react';
import Button from '../Button';

function Uppercase({ inputText, applyOption }) {
  const handleUppercase = () => {
    const resultText = inputText.toUpperCase();
    applyOption(resultText);
  };

  return <Button onClick={handleUppercase}>Uppercase</Button>;
}

export default Uppercase;
