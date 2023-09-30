import "./App.css";
import InputTextBox from "./components/InputTextBox";
import OutputTextBox from "./components/OutputTextBox";
import TextOptions from "./components/TextOptions";

function App() {
  return (
    <div className="App">
      <InputTextBox />
      {/* Input Text Box Component */}
      {/* This component will be responsible for taking user input */}
      <TextOptions />
      {/* Text Options Component */}
      {/* This component will contain various options for text processing */}
      <OutputTextBox />
      {/* Output Text Box Component */}
      {/* This component will display the processed text and have the option to copy to clipboard */}
    </div>
  );
}

export default App;
