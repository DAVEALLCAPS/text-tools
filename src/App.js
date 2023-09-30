import React, { useState } from "react";
import InputTextBox from "./components/InputTextBox";
import TextOptions from "./components/TextOptions";
import OutputTextBox from "./components/OutputTextBox";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <InputTextBox inputText={inputText} setInputText={setInputText} />
      <TextOptions inputText={inputText} setOutputText={setOutputText} outputText={outputText} />
      <OutputTextBox outputText={outputText} />
    </div>
  );
}

export default App;
