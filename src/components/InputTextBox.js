import React from "react";

function InputTextBox({ inputText, setInputText }) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

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
    </div>
  );
}

export default InputTextBox;
