import React from 'react';
import Button from '../Button';

function Base64Encode({ inputText, applyOption }) {
  const handleEncode = () => {
    const resultText = btoa(unescape(encodeURIComponent(inputText)));
    applyOption(resultText);
  };

  return <Button onClick={handleEncode}>Encode to Base64</Button>;
}

export default Base64Encode;
