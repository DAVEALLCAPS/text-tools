import React from "react";

function InputTextBox({ inputText, setInputText }) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const characterCount = inputText.length;
  const wordCount = inputText.split(/\s+/).filter(Boolean).length;
  const textSize = new Blob([inputText]).size;

  return (
    <div className="mt-1">
      <label className="block text-lg font-bold mb-2" htmlFor="inputTextArea">Input Text</label>
      <textarea
        id="inputTextArea"
        value={inputText}
        onChange={handleChange}
        placeholder="Paste or type your text here..."
        rows="6"
        cols="50"
        className="p-2 mb-2 border rounded"
      ></textarea>
      <div className="text-sm mt-2">
        <p>Character Count: {characterCount}</p>
        <p>Word Count: {wordCount}</p>
        <p>Text Size (bytes): {textSize}</p>
      </div>
    </div>
  );
}

export default InputTextBox;
