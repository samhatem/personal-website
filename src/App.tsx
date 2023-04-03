import React, { useState, useEffect } from 'react';
import './App.css';
import TypingText from './TypingText';

const App: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const bio = `
  # Sam Hatem
  
  Developer
  
  My [GitHub](https://github.com/samhatem) and [Twitter](https://twitter.com/sam__hatem).
  `;

  return (
    <div className="App">
      <header className="App-header">
        {showText && <TypingText text={bio} />}
      </header>
    </div>
  );
};

export default App;
