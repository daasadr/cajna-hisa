'use client';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './TeaMenu.module.css';

const SLUGS = ['zeleni-caji', 'beli-caji', 'oolong', 'zeliscni-caji', 'domace-bylinky'];

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
              ? 'Izberite svojo čajno pot — od prvih zelenih listov do gorenjskih zelišč.'
              : 'Choose your tea journey — from the first green leaves to Gorenjska wild herbs.'}
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
              <Link href={`/caji#${SLUGS[i]}`} className={styles.cardLink}>
                {t.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
