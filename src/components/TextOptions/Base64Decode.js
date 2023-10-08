import React from 'react';
import Button from '../Button';

function Base64Decode({ inputText, applyOption }) {
  const handleDecode = () => {
    try {
      const resultText = decodeURIComponent(escape(atob(inputText)));
      applyOption(resultText);
    } catch (error) {
      alert('Invalid Base64 string');
    }
  };

  return <Button onClick={handleDecode}>Decode from Base64</Button>;
}

export default Base64Decode;
