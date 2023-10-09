import React, { useState } from 'react';

function TTSPage() {
  const [text, setText] = useState('');
  const [rate, setRate] = useState(1);

  const speakText = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = Number(rate);
    window.speechSynthesis.speak(msg);
  };
  
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  }

  return (
    <div className="min-h-screen bg-gray-800 p-4 text-white">
      <label htmlFor="tts-input" className="block text-sm font-medium">
        Enter Text to Speak
      </label>
      <textarea
        id="tts-input"
        className="w-full p-2 rounded mt-2 text-black h-24"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text here to be converted to speech..."
        aria-label="Text to Speech Input"
      />
      <div className="mt-4 flex items-center">
        <div className="w-1/3">
          <label htmlFor="rate" className="block text-sm font-medium">
            Speech Rate: {rate}x
          </label>
          <input 
            type="range" 
            id="rate" 
            min="1" 
            max="2" 
            step="0.25" 
            value={rate} 
            onChange={(e) => setRate(e.target.value)}
            className="w-full"
            aria-label="Speech Rate Slider"
          />
        </div>
        <div className="flex-grow flex space-x-4 ml-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-grow"
            onClick={speakText}
            aria-label="Speak Text Button"
          >
            Speak Text
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-grow"
            onClick={stopSpeech}
            aria-label="Stop Speaking Button"
          >
            Stop Speaking
          </button>
        </div>
      </div>
    </div>
  );
}

export default TTSPage;
