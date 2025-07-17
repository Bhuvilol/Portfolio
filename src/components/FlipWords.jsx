import React, { useEffect, useState } from 'react';

const TYPING_SPEED = 55;
const ERASING_SPEED = 35;
const PAUSE_AFTER_TYPED = 1100;
const PAUSE_AFTER_DELETE = 350;

const FlipWords = ({ words = [] }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      // Pause after typing
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
    } else if (isDeleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, ERASING_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      // Pause after deleting, then move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return (
    <span className="inline-block text-inherit align-middle">
      {displayed}
      <span className="inline-block w-1 h-[1em] align-bottom bg-current animate-pulse ml-0.5 rounded-sm" />
    </span>
  );
};

export default FlipWords; 