import React, { useMemo } from 'react';

interface WavyTextProps {
  text: string;
  className?: string;
}

const WavyText: React.FC<WavyTextProps> = ({ text, className = "" }) => {
  const letters = useMemo(() => text.split(""), [text]);
  
  return (
    <div className={`flex overflow-visible ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-wave"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
};

export default WavyText;