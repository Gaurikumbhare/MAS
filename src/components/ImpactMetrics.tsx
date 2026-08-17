"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './ImpactMetrics.module.css';

const stats = [
  { id: 1, target: 20, suffix: 'L+', label: 'Children Impacted' },
  { id: 2, target: 27, suffix: '', label: 'States Covered' },
  { id: 3, target: 400, suffix: '+', label: 'Projects Completed' },
  { id: 4, target: 22, suffix: '', label: 'Years of Service' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className={styles.number}>
      {count}{suffix}
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className={`section ${styles.metrics}`}>
      <div className="container">
        <div className="grid grid-cols-4 gap-md">
          {stats.map((stat) => (
            <div key={stat.id} className={styles.item}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
