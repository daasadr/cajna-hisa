'use client';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { asset } from '@/lib/basePath';
import styles from './Hero.module.css';

const LeafCanvas = dynamic(() => import('./LeafCanvas'), { ssr: false });

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero} id="uvod">
      <div
        ref={bgRef}
        className={styles.bg}
        style={{ backgroundImage: `url(${asset('/images/hero-bg.jpg')})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <LeafCanvas />

      <div className={`container ${styles.content}`}>
        <p className={styles.subtitle}>{t.subtitle}</p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.claim}>{t.claim}</p>
        <div className={styles.ctas}>
          <a href="#kontakt" className="btn-primary">
            {t.cta1}
          </a>
          <a href="#caji" className="btn-outline">
            {t.cta2}
          </a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
