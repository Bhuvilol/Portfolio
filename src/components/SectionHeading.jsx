import React from 'react';
import { EncryptedText } from './ui/encrypted-text';

/**
 * Reusable hacker-themed section heading with encrypted text reveal on scroll.
 * Usage: <SectionHeading>projects</SectionHeading>
 */
const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`font-mono text-2xl md:text-3xl font-bold mb-6 ${className}`}>
    <span className="text-hacker-muted">## </span>
    <EncryptedText
      text={children}
      encryptedClassName="text-hacker-muted"
      revealedClassName="text-hacker-green"
      revealDelayMs={100}
      flipDelayMs={30}
      initialDelayMs={800}
      initialLengthMultiplier={1.8}
    />
  </h2>
);

export default SectionHeading;
