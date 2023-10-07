import React from 'react';
import Button from '../Button';

function JoinLines({ inputText, applyOption }) {
  const handleJoinLines = () => {
    const resultText = inputText.split("\n").join(" ");
    applyOption(resultText);
  };

  return <Button onClick={handleJoinLines}>Join Lines</Button>;
}

export default JoinLines;
