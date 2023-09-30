import React from 'react';

function TextOptions({ inputText, setOutputText }) {

  const joinLines = () => {
    const joinedText = inputText.split('\n').join(' '); // you might want to join with ' ' or ''
    setOutputText(joinedText);
  };

  return (
    <div>
      <button onClick={joinLines}>Join Lines</button>
    </div>
  );
}

export default TextOptions;
