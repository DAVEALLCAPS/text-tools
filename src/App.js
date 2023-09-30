import React, { useState } from "react";
import InputTextBox from "./components/InputTextBox";
import TextOptions from "./components/TextOptions";
import OutputTextBox from "./components/OutputTextBox";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  return (
    <div className="App">
      <InputTextBox inputText={inputText} setInputText={setInputText} />
      <TextOptions inputText={inputText} setOutputText={setOutputText} />
      <OutputTextBox outputText={outputText} />
    </div>
  );
}

export default App;
