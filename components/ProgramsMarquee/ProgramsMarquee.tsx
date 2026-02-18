'use client';

import styles from './ProgramsMarquee.module.css';
import Image from 'next/image';

const programs = [
  { name: 'Program 1', logo: '/images/pics/programs1/1..png' },
  { name: 'Program 2', logo: '/images/pics/programs1/1._image_2026-01-28_145321199-removebg-preview.png' },
  { name: 'Program 3', logo: '/images/pics/programs1/2.-removebg-preview.png' },
  { name: 'Program 4', logo: '/images/pics/programs1/2._image_2026-01-28_145714510-removebg-preview.png' },
  { name: 'Program 5', logo: '/images/pics/programs1/3..webp' },
  { name: 'Program 6', logo: '/images/pics/programs1/4.-removebg-preview.png' },
  { name: 'Program 7', logo: '/images/pics/programs1/4._image_2026-01-28_145041663-removebg-preview.png' },
  { name: 'Program 8', logo: '/images/pics/programs1/5._image_2026-01-28_150907272-removebg-preview.png' },
  { name: 'Program 9', logo: '/images/pics/programs1/6.-removebg-preview.png' },
  { name: 'Program 10', logo: '/images/pics/programs1/Copie de 3. image_2026-01-28_145826402.png' },
  { name: 'Program 11', logo: '/images/pics/programs1/Copie de image_2026-01-28_150305216.png' },
  { name: 'Program 12', logo: '/images/pics/programs1/image_2026-01-28_145917303-removebg-preview.png' },
  { name: 'Program 13', logo: '/images/pics/programs1/image_2026-01-28_150416084-removebg-preview.png' },
];

const column1 = programs.slice(0, 4);
const column2 = programs.slice(4, 7);
const column3 = programs.slice(7, 10);
const column4 = programs.slice(10, 13);

const ProgramLogo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div className={styles.logoCard}>
      <div className={styles.logoWrapper}>
        <Image
          src={logo}
          alt={name}
          width={150}
          height={80}
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default function ProgramsMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeColumn}>
        {[...column1, ...column1].map((program, i) => (
          <ProgramLogo key={`${program.name}-${i}`} {...program} />
        ))}
      </div>
      <div className={`${styles.marqueeColumn} ${styles.reverse}`}>
        {[...column2, ...column2].map((program, i) => (
          <ProgramLogo key={`${program.name}-${i}`} {...program} />
        ))}
      </div>
      <div className={`${styles.marqueeColumn} ${styles.desktopOnly}`}>
        {[...column3, ...column3].map((program, i) => (
          <ProgramLogo key={`${program.name}-${i}`} {...program} />
        ))}
      </div>
      <div className={`${styles.marqueeColumn} ${styles.reverse} ${styles.desktopOnly}`}>
        {[...column4, ...column4].map((program, i) => (
          <ProgramLogo key={`${program.name}-${i}`} {...program} />
        ))}
      </div>
      <div className={styles.gradientTop}></div>
      <div className={styles.gradientBottom}></div>
    </div>
  );
}
