'use client';

import { useMemo, useState } from 'react';
import CaseStudyCard from '@/components/CaseStudyCard';
import styles from './case-studies.module.css';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
  categories: string[];
}

export default function CaseStudiesClient({ caseStudies, categories }: CaseStudiesClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') {
      return caseStudies;
    }
    return caseStudies.filter((study) => study.category === activeCategory);
  }, [caseStudies, activeCategory]);

  return (
    <div className={styles.caseStudiesSection}>
      <div className="container">
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${category === activeCategory ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}
