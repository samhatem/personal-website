import React, { useState, useEffect } from 'react';
import './App.css';
import TypingText from './TypingText';

const bio = `
# Sam Hatem

[GitHub](https://github.com/samhatem) [Twitter](https://twitter.com/sam__hatem) [me@samhatem.xyz](mailto:me@samhatem.xyz)

Previously co-founder at Slide (backed by Framework and Polychain) and engineer at [Polymarket](https://polymarket.com).

Angel investor in [Zeet](https://zeet.co), [Popchew](https://popchew.com), [Modern Intelligence](https://www.modernintelligence.ai/)
`;

const App: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showText && <TypingText text={bio} />}
      </header>
    </div>
  );
};

export default App;
