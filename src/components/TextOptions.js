import React, { useState } from "react";

function TextOptions({ inputText, setOutputText }) {
  const [selectedOption, setSelectedOption] = useState("joinLines"); // Set initial state to 'joinLines'

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
    <div>
      <label>
        <input
          type="radio"
          value="joinLines"
          checked={selectedOption === "joinLines"}
          onChange={handleOptionChange}
        />
        Join Lines
      </label>
      <button onClick={applyTextOption}>Submit</button>
    </div>
  );
}

export default TextOptions;
