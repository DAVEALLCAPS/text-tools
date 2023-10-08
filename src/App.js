import React, { useState } from 'react';
import InputTextBox from './components/InputTextBox';
import OutputTextBox from './components/OutputTextBox';
import CopyButton from './components/CopyButton';
import JoinLines from './components/TextOptions/JoinLines';
import Uppercase from './components/TextOptions/Uppercase';
import Lowercase from './components/TextOptions/Lowercase';
import TextStatistics from './components/TextStatistics';
import Base64Decode from './components/TextOptions/Base64Decode';
import Base64Encode from './components/TextOptions/Base64Encode';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <TooltipProvider>
    <div className="min-h-screen bg-gray-800 text-white grid grid-cols-2 gap-4 p-4">
      <div>
        <label htmlFor="input" className="block text-sm font-medium">Input</label>
        <InputTextBox inputText={inputText} setInputText={setInputText} />
        <TextStatistics inputText={inputText} />
      </div>
      <div>
        <label htmlFor="output" className="block text-sm font-medium">Output</label>
        <OutputTextBox outputText={outputText} />
        <TextStatistics inputText={outputText} />
      </div>
      <div className="col-span-2 grid grid-cols-3 gap-4">
        <JoinLines inputText={inputText} applyOption={setOutputText} />
        <Base64Encode inputText={inputText} applyOption={setOutputText} />
        <Base64Decode inputText={inputText} applyOption={setOutputText} />
        <Uppercase inputText={inputText} applyOption={setOutputText} />
        <Lowercase inputText={inputText} applyOption={setOutputText} />
      </div>
      <div className="col-span-2 text-right">
        <CopyButton textToCopy={outputText} />
      </div>
    </div>
    </TooltipProvider>
  );
}

export default App;
