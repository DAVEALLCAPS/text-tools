import React from "react";

function InputTextBox({ inputText, setInputText }) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="mb-1">
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Paste or type your text here..."
        rows="6"
        cols="50"
        className="p-2 border rounded"
      ></textarea>
    </div>
  );
}

export default InputTextBox;
