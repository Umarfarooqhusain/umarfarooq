'use client';

import { useEffect, useState } from 'react';

const words = ['Next.js', 'React.js', 'JavaScript'];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

export default function ScrambleText() {
  const [displayText, setDisplayText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const changeWord = () => {
      const nextIndex = (wordIndex + 1) % words.length;
      const finalWord = words[nextIndex];

      let iteration = 0;

      const scramble = setInterval(() => {
        const text = finalWord
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return letter;
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        setDisplayText(text);

        iteration += 1 / 3;

        if (iteration >= finalWord.length) {
          clearInterval(scramble);
          setDisplayText(finalWord);
          setWordIndex(nextIndex);
        }
      }, 40);
    };

    const timer = setTimeout(changeWord, 1500);

    return () => clearTimeout(timer);
  }, [wordIndex]);

  return (
    <span
      className="
        text-blue-500
        inline-block
        min-w-[12ch]
      "
    >
      {displayText}
    </span>
  );
}
