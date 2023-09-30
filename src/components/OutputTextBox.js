import React from "react";

function OutputTextBox({ outputText }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert("Text copied to clipboard");
  };

  return (
    <div>
      <textarea value={outputText} readOnly rows="20" cols="100"></textarea>
      <button onClick={handleCopy}>Copy to Clipboard</button>
    </div>
  );
}

export default OutputTextBox;
