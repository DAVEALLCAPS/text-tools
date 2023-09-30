import React, { useState, useEffect } from "react";

export default function OutputTextBox({ newText }) {
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    setOutputText(newText);
  }, [newText]);

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
