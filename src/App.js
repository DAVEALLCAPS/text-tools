import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TextToolPage from './TextToolPage';
import TTSPage from './TTSPage'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Text Tool</Link></li>
            <li><Link to="/tts">Text-to-Speech</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TextToolPage />} />
          <Route path="/tts" element={<TTSPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
