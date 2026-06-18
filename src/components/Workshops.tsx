'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Workshops.module.css';

const ICONS = ['🍵', '🌸', '🌾'];

export default function Workshops() {
  const { lang } = useLanguage();
  const t = translations[lang].workshops;

  return (
    <section id="delavnice" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
        </div>

        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article
              key={item.title}
              className={`${styles.card} ${i === 1 ? styles.featured : ''} reveal reveal-delay-${i + 1}`}
            >
              {i === 1 && (
                <div className={styles.badge}>
                  {lang === 'sl' ? 'Najbolj priljubljena' : 'Most popular'}
                </div>
              )}
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{ICONS[i]}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span>{item.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 7a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 13c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span>{item.spots}</span>
                </div>
              </div>
              <div className={styles.footer}>
                <span className={styles.price}>{item.price}</span>
                <button
                  className={i === 1 ? styles.ctaFeatured : styles.cta}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('kontakt');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
