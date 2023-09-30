import React from "react";

function OutputTextBox({ outputText }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert("Text copied to clipboard");
  };

  return (
    <div className="mt-1">
      <textarea
        value={outputText}
        readOnly
        rows="6"
        cols="50"
        className="p-2 mb-2 border rounded"
      ></textarea>
      <div className="mt-2 flex justify-center">
      <button
        onClick={handleCopy}
        className="px-1 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Copy to Clipboard
      </button>
      </div>
    </div>
  );
}

export default OutputTextBox;
