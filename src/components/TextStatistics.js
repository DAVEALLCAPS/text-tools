import React, { useEffect, useState } from 'react';

const TextStatistics = ({ inputText }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [byteSize, setByteSize] = useState(0);

  useEffect(() => {
    setCharacterCount(inputText.length);
    setWordCount(inputText.split(/\s+/).filter(word => word).length);
    setLineCount(inputText.split(/\r\n|\r|\n/).length);
    setByteSize(new Blob([inputText]).size);
  }, [inputText]);

  return (
    <div>
      <p>Character Count: {characterCount}</p>
      <p>Word Count: {wordCount}</p>
      <p>Line Count: {lineCount}</p>
      <p>Byte Size: {byteSize}</p>
    </div>
  );
};

export default TextStatistics;
