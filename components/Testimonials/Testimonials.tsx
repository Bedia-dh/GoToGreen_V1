'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={star <= rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <div className={styles.card}>
              <StarRating rating={testimonial.rating} />
              
              <blockquote className={styles.quote}>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={testimonial.image} alt={testimonial.author} />
                  ) : (
                    <span>{testimonial.author.charAt(0)}</span>
                  )}
                </div>
                <div className={styles.authorInfo}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                  <span className={styles.company}>{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.controlBtn} aria-label="Previous testimonial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className={styles.controlBtn} aria-label="Next testimonial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
