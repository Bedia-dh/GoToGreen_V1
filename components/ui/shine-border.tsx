'use client';

import React from 'react';
import styles from './shine-border.module.css';

interface ShineBorderProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  borderRadius?: number;
  borderWidth?: number;
}

export function ShineBorder({
  children,
  className = '',
  color = 'rgba(110, 168, 67, 0.5)',
  borderRadius = 12,
  borderWidth = 2,
}: ShineBorderProps) {
  return (
    <div
      className={`${styles.shineBorder} ${className}`}
      style={{
        '--border-radius': `${borderRadius}px`,
        '--border-width': `${borderWidth}px`,
        '--shine-color': color,
      } as React.CSSProperties}
    >
      <div className={styles.shineEffect}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
