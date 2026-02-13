"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';
import { NumberTicker } from '@/components/ui/number-ticker';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  const [visible, setVisible] = useState<boolean[]>(() => stats.map(() => false));
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const seen = useRef<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !seen.current.has(index)) {
            seen.current.add(index);
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stats]);

  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => (
        <div
          key={index}
          data-index={index}
          ref={(el) => {
            statRefs.current[index] = el;
          }}
          className={`${styles.stat} ${visible[index] ? styles.visible : ''}`}
        >
          <span className={`${styles.value} ${visible[index] ? styles.underline : ''}`}>
            {visible[index] ? (
              <NumberTicker 
                value={parseInt(stat.value)} 
                className={styles.tickerValue}
              />
            ) : (
              stat.value
            )}
            {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
          </span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
