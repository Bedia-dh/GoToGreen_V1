'use client';

import { useState } from 'react';
import styles from './ExpandableText.module.css';

interface ExpandableTextProps {
  preview: string;
  rest: string;
}

export default function ExpandableText({ preview, rest }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandableText}>
      {/* Desktop: always show full text */}
      <p className={styles.desktopFull}>{preview} {rest}</p>

      {/* Mobile: show preview, toggle rest */}
      <div className={styles.mobileOnly}>
        <p className={styles.mobilePreview}>
          {preview}
          {!isExpanded && '...'}
        </p>
        {isExpanded && (
          <p className={styles.mobileRest}>{rest}</p>
        )}
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Show less' : 'Learn more'}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
}
