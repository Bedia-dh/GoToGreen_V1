'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  videoSrc?: string;
  imageSrc?: string;
  overlay?: boolean;
  size?: 'default' | 'large' | 'small';
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  videoSrc,
  imageSrc,
  overlay = true,
  size = 'default',
}: HeroProps) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    // Wait 1.5 seconds before starting animations
    const initialDelay = setTimeout(() => {
      setShowContent(true);
      
      // Typing animation for title
      let titleIndex = 0;
      const titleInterval = setInterval(() => {
        if (titleIndex <= title.length) {
          setDisplayedTitle(title.slice(0, titleIndex));
          titleIndex++;
        } else {
          clearInterval(titleInterval);
          
          // Start description typing after title completes
          if (description) {
            let descIndex = 0;
            const descInterval = setInterval(() => {
              if (descIndex <= description.length) {
                setDisplayedDescription(description.slice(0, descIndex));
                descIndex++;
              } else {
                clearInterval(descInterval);
                // Show CTAs after description completes
                setShowActions(true);
              }
            }, 15);
          } else {
            setShowActions(true);
          }
        }
      }, 55);
    }, 1750);

    return () => clearTimeout(initialDelay);
  }, [title, description]);

  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      {videoSrc && (
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      {!videoSrc && imageSrc && (
        <div 
          className={styles.image}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
      
      {overlay && <div className={styles.overlay} />}
      
      <div className={`container ${styles.content}`}>
        {subtitle && (
          <span className={`${styles.subtitle} ${showContent ? styles.visible : ''}`}>
            {subtitle}
          </span>
        )}
        <h1 className={`${styles.title} ${showContent ? styles.visible : ''}`}>
          {displayedTitle}
          <span className={styles.cursor}>|</span>
        </h1>
        {description && (
          <p className={`${styles.description} ${showContent ? styles.visible : ''}`}>
            {displayedDescription}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className={`${styles.actions} ${showActions ? styles.visible : ''}`}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-accent btn-lg">
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-white btn-lg">
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
