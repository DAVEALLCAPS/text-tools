import React from "react";

function OutputTextBox({ outputText }) {
  return (
    <div className="mt-1">
      <label className="block text-lg font-bold mb-2" htmlFor="outputTextArea">Output Text</label>
      {typeof outputText === 'string' ? (
        <textarea
          id="outputTextArea"
          value={outputText}
          readOnly
          rows="6"
          cols="50"
          className="p-2 mb-2 border rounded"
        ></textarea>
      ) : (
        <div id="outputTextArea" className="p-2 mb-2 border rounded">
          {outputText}
        </div>
      )}
    </div>
  );
}

export default OutputTextBox;
