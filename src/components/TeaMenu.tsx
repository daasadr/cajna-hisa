'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './TeaMenu.module.css';

export default function TeaMenu() {
  const { lang } = useLanguage();
  const t = translations[lang].menu;

  return (
    <section id="caji" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>
            {lang === 'sl'
              ? 'Izberite svojo čajno pot — od prvih zelenih listov do globokih oolongov.'
              : 'Choose your tea journey — from the first green leaves to deep oolongs.'}
          </p>
        </div>

        <div className={styles.grid}>
          {t.categories.map((cat, i) => (
            <article
              key={cat.name}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{cat.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
              <button className={styles.cardLink} type="button">
                {t.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
