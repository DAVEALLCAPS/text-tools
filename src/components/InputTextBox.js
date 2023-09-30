import React from "react";

function InputTextBox({ inputText, setInputText }) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Paste or type your text here..."
        rows="20"
        cols="100"
      ></textarea>
    </div>
  );
}

export default InputTextBox;
