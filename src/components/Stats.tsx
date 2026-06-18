'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Stats.module.css';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), target);
            setCount(current);
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.number}>
      {count}
      {suffix}
    </span>
  );
}

const FOUNDED = 2015;

export default function Stats() {
  const { lang } = useLanguage();
  const rawItems = translations[lang].stats.items;

  const items = rawItems.map((item) =>
    item.value === -1
      ? { ...item, value: new Date().getFullYear() - FOUNDED }
      : item
  );

  return (
    <section className={styles.stats}>
      <div className={`container ${styles.grid}`}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <Counter target={item.value} suffix={item.suffix} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
