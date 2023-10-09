import React, { useState } from 'react';

function TTSPage() {
  const [text, setText] = useState('');

  const speakText = () => {
    // Create a new instance of SpeechSynthesisUtterance
    const msg = new SpeechSynthesisUtterance();
    
    // Set the text for the SpeechSynthesisUtterance
    msg.text = text;

    // Use the speechSynthesis interface to speak the text
    window.speechSynthesis.speak(msg);
  };
  
  const stopSpeech = () => {
    // Cancel any ongoing speech synthesis
    window.speechSynthesis.cancel();
  }

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <label htmlFor="tts-input" className="block text-sm font-medium text-white">
        Enter Text to Speak
      </label>
      <input
        type="text"
        id="tts-input"
        className="w-full p-2 rounded mt-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={speakText}
      >
        Speak Text
      </button>
      <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={stopSpeech}
        >
          Stop Speaking
        </button>
    </div>
  );
}

export default TTSPage;
