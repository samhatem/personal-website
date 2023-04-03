import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ReactMarkdown from 'react-markdown';

interface TypingTextProps {
    text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
    const [markdown, setMarkdown] = useState('');
    const [typedText] = useTypewriter({ words: [text], typeSpeed: 20 });

    useEffect(() => {
        setMarkdown(typedText);
      }, [typedText]);
  
    return (
        <div>
             <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>);
};

export default TypingText;