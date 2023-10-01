import React, { useState } from "react";
import Markdown from "react-markdown";

function TextOptions({ inputText, setOutputText, outputText }) {
  const [selectedOption, setSelectedOption] = useState("joinLines");
  const [autoCopy, setAutoCopy] = useState(false);

  const [rawMarkdown, setRawMarkdown] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const applyTextOption = () => {
    let resultText = inputText;
    switch (selectedOption) {
      case "joinLines":
        resultText = inputText.split("\n").join(" ");
        break;
      case "convertToHTML":
        setRawMarkdown(inputText);
        resultText = <Markdown>{inputText}</Markdown>;
        break;
      default:
        break;
    }
    setOutputText(resultText);
    if (autoCopy) {
      handleCopy(resultText);
    }
  };

  const handleCopy = () => {
    const textToCopy = selectedOption === 'convertToHTML' ? rawMarkdown : outputText;
    navigator.clipboard.writeText(textToCopy);
    alert("Text copied to clipboard");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-gray-100">
      <div className="space-x-2">
        <input
          type="radio"
          id="joinLines"
          value="joinLines"
          checked={selectedOption === "joinLines"}
          onChange={handleOptionChange}
          className="form-radio"
        />
        <label htmlFor="joinLines" className="font-medium">
          Join Lines
        </label>
        <input
          type="radio"
          id="convertToHTML"
          value="convertToHTML"
          checked={selectedOption === "convertToHTML"}
          onChange={handleOptionChange}
          className="form-radio"
        />
        <label htmlFor="convertToHTML" className="font-medium">
          Convert to HTML
        </label>
      </div>
      <button
        onClick={applyTextOption}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={autoCopy}
          onChange={() => setAutoCopy(!autoCopy)}
          className="form-checkbox"
        />
        <label className="font-medium">Auto Copy to Clipboard</label>
      </div>
      <button
        onClick={() => handleCopy(outputText)}
        className="px-4 py-2 mt-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}

export default TextOptions;
