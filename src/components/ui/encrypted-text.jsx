import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

const DEFAULT_CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?';

function generateRandomCharacter(charset) {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(original, charset) {
  if (!original) return '';
  let result = '';
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === ' ' ? ' ' : generateRandomCharacter(charset);
  }
  return result;
}

function generateGibberish(length, charset) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += generateRandomCharacter(charset);
  }
  return result;
}

export const EncryptedText = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
  initialDelayMs = 0,
  /**
   * Start with this many times the text length in gibberish,
   * then shrink down to actual length as the text decodes.
   * Set to 1 for no extra length (default behavior).
   */
  initialLengthMultiplier = 1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState(0);
  const [displayLength, setDisplayLength] = useState(
    text ? Math.floor(text.length * initialLengthMultiplier) : 0,
  );
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const scrambleCharsRef = useRef([]);

  useEffect(() => {
    if (!isInView || !text) return;

    const totalLength = text.length;
    const maxLength = Math.floor(totalLength * initialLengthMultiplier);
    const initialChars = [];
    for (let i = 0; i < maxLength; i++) {
      initialChars.push(generateRandomCharacter(charset));
    }
    scrambleCharsRef.current = initialChars;
    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);
    setDisplayLength(maxLength);

    let isCancelled = false;

    const update = (now) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalAnimDuration = initialDelayMs + totalLength * revealDelayMs;

      // Calculate reveal progress (after initial delay)
      const revealElapsed = Math.max(0, elapsedMs - initialDelayMs);
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(revealElapsed / Math.max(1, revealDelayMs)),
      );

      setRevealCount(currentRevealCount);

      // Shrink the display length from maxLength → totalLength over the full animation
      if (maxLength > totalLength) {
        const shrinkProgress = Math.min(1, elapsedMs / totalAnimDuration);
        // Ease out for smoother shrink
        const easedProgress = 1 - Math.pow(1 - shrinkProgress, 2);
        const currentDisplayLength = Math.max(
          totalLength,
          Math.round(maxLength - (maxLength - totalLength) * easedProgress),
        );
        setDisplayLength(currentDisplayLength);
      }

      if (currentRevealCount >= totalLength) {
        setDisplayLength(totalLength);
        return;
      }

      // Re-randomize unrevealed + extra scramble characters
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        const currentLen = Math.max(maxLength, scrambleCharsRef.current.length);
        for (let index = 0; index < currentLen; index += 1) {
          if (index >= currentRevealCount) {
            scrambleCharsRef.current[index] = generateRandomCharacter(charset);
          }
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs, initialDelayMs, initialLengthMultiplier]);

  if (!text) return null;

  // Build the display characters
  const chars = [];
  for (let i = 0; i < displayLength; i++) {
    if (i < revealCount) {
      // Revealed real character
      chars.push({ char: text[i], revealed: true });
    } else if (i < text.length) {
      // Unrevealed but within real text range — show scramble
      const ch = text[i] === ' ' ? ' ' : (scrambleCharsRef.current[i] ?? generateRandomCharacter(charset));
      chars.push({ char: ch, revealed: false });
    } else {
      // Extra trailing gibberish (beyond real text length)
      chars.push({ char: scrambleCharsRef.current[i] ?? generateRandomCharacter(charset), revealed: false });
    }
  }

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {chars.map((item, index) => (
        <span
          key={index}
          className={cn(item.revealed ? revealedClassName : encryptedClassName)}
        >
          {item.char}
        </span>
      ))}
    </motion.span>
  );
};

export default EncryptedText;
