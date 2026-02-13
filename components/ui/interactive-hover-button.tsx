"use client";

import React from "react";
import Link from "next/link";
import styles from "./interactive-hover-button.module.css";

export interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export function InteractiveHoverButton({
  text = "Button",
  className,
  children,
  href,
  style,
  target,
  rel,
}: InteractiveHoverButtonProps) {
  return (
    <Link 
      href={href} 
      className={`${styles.button} ${className || ''}`} 
      style={style}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
    >
      <span className={styles.content}>{children || text}</span>
    </Link>
  );
}
