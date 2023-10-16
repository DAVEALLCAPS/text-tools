import React, { useState, useEffect } from "react";
import InputTextBox from "./components/InputTextBox";
import OutputTextBox from "./components/OutputTextBox";
import CopyButton from "./components/CopyButton";
import JoinLines from "./components/TextOptions/JoinLines";
import Uppercase from "./components/TextOptions/Uppercase";
import Lowercase from "./components/TextOptions/Lowercase";
import TextStatistics from "./components/TextStatistics";
import Base64Decode from "./components/TextOptions/Base64Decode";
import Base64Encode from "./components/TextOptions/Base64Encode";
import { TooltipProvider } from "./components/ui/tooltip";
import ExtractEmails from "./components/TextOptions/ExtractEmails";
import ExtractURLs from "./components/TextOptions/ExtractURLs";
import SaveToTXT from "./components/SaveToTXT";
import SaveToCSV from "./components/SaveToCSV";
import JsonFormatter from "./components/TextOptions/JsonFormatter";
import JsonMinifier from "./components/TextOptions/JsonMinifier";
import RemoveDuplicateLines from "./components/TextOptions/RemoveDuplicateLines";
import OutputHistory from "./components/OutputHistory";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function TextToolPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [outputHistory, setOutputHistory] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const appendToHistory = (newOutput) => {
    setOutputText(newOutput);
    setOutputHistory((prevHistory) => [...prevHistory, newOutput]);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showAlert]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-800 text-white grid grid-cols-2 gap-4 p-4">
        <div>
          <label htmlFor="input" className="block text-sm font-medium">
            Input
          </label>
          <InputTextBox inputText={inputText} setInputText={setInputText} />
          <TextStatistics inputText={inputText} />
        </div>
        <div>
          <label htmlFor="output" className="block text-sm font-medium">
            Output
          </label>
          <OutputTextBox outputText={outputText} />
          <TextStatistics inputText={outputText} compareText={inputText} />
        </div>
        <div className="col-span-2 flex flex-wrap gap-4 justify-end">
          <CopyButton textToCopy={outputText} />
          <SaveToTXT text={outputText} />
          <SaveToCSV text={outputText} />
        </div>
        <div className="col-span-2 flex gap-4 justify-center">
          <JoinLines inputText={inputText} applyOption={appendToHistory} />
          <RemoveDuplicateLines
            inputText={inputText}
            applyOption={appendToHistory}
          />
          <Base64Encode inputText={inputText} applyOption={appendToHistory} />
          <Base64Decode inputText={inputText} applyOption={appendToHistory} />
          <Uppercase inputText={inputText} applyOption={appendToHistory} />
          <Lowercase inputText={inputText} applyOption={appendToHistory} />
          <ExtractEmails inputText={inputText} applyOption={appendToHistory} />
          <ExtractURLs inputText={inputText} applyOption={appendToHistory} />
          <JsonFormatter inputText={inputText} applyOption={appendToHistory} />
          <JsonMinifier inputText={inputText} applyOption={appendToHistory} />
        </div>
        <div className="col-span-2">
          <OutputHistory history={outputHistory} setShowAlert={setShowAlert} />
        </div>
        <div>
          {" "}
          {showAlert && (
            <Alert>
              <HiOutlineClipboardDocumentCheck />
              <AlertTitle>Copied!</AlertTitle>
              <AlertDescription>
                Text has been successfully copied to the clipboard.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}

export default TextToolPage;
