'use client';
import { useMemo } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Events.module.css';

const OFFSETS_DAYS = [9, 23, 38];

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date: Date, lang: string): string {
  return new Intl.DateTimeFormat(lang === 'sl' ? 'sl-SI' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default function Events() {
  const { lang } = useLanguage();
  const t = translations[lang].events;

  const dates = useMemo(() => {
    const today = new Date();
    return OFFSETS_DAYS.map((offset) => addDays(today, offset));
  }, []);

  return (
    <section id="dogodki" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{t.sub}</p>
        </div>

        <div className={styles.list}>
          {t.items.map((item, i) => (
            <article
              key={item.title}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <div className={styles.datePill}>
                <time dateTime={dates[i].toISOString().split('T')[0]}>
                  <span className={styles.dateDay}>{dates[i].getDate()}</span>
                  <span className={styles.dateMonth}>
                    {new Intl.DateTimeFormat(lang === 'sl' ? 'sl-SI' : 'en-GB', { month: 'short' }).format(dates[i]).toUpperCase()}
                  </span>
                  <span className={styles.dateYear}>{dates[i].getFullYear()}</span>
                </time>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.emoji} aria-hidden="true">{item.emoji}</span>
                  <span className={styles.type}>{item.type}</span>
                  <span className={styles.dot} aria-hidden="true">·</span>
                  <span className={styles.fullDate}>{formatDate(dates[i], lang)}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>

              <div className={styles.action}>
                <span className={styles.freeTag}>{t.free}</span>
                <button
                  className={styles.registerBtn}
                  type="button"
                  onClick={() => {
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t.registerBtn}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
