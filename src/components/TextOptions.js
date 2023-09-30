import React, { useState } from "react";

function TextOptions({ inputText, setOutputText }) {
  const [selectedOption, setSelectedOption] = useState("joinLines");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const applyTextOption = () => {
    let resultText = inputText;
    switch (selectedOption) {
      case "joinLines":
        resultText = inputText.split("\n").join(" ");
        break;
      default:
        break;
    }
    setOutputText(resultText);
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
      </div>
      <button
        onClick={applyTextOption}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

export default TextOptions;
