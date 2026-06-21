'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { asset } from '@/lib/basePath';
import styles from './About.module.css';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="o-nas" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.images}>
          <div className={`${styles.imgMain} reveal`}>
            <img
              src={asset('/images/about-interior.jpg')}
              alt="Notranjost čajne hiše Dolina"
              decoding="async"
            />
          </div>
          <div className={`${styles.imgOverlay} reveal reveal-delay-2`}>
            <img
              src={asset('/images/about-tea.jpg')}
              alt="Čajnik in skodelica čaja"
              decoding="async"
            />
          </div>
          <div className={styles.badge} aria-hidden="true">
            <span className={styles.badgeYear}>2015</span>
            <span className={styles.badgeLabel}>Ljubljana</span>
          </div>
        </div>

        <div className={styles.text}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.para} reveal reveal-delay-2`}>{t.p1}</p>
          <p className={`${styles.para} reveal reveal-delay-3`}>{t.p2}</p>
          <p className={`${styles.para} reveal reveal-delay-4`}>{t.p3}</p>

          <div className={`${styles.signature} reveal reveal-delay-4`}>
            <div className={styles.sigLine} />
            <div>
              <p className={styles.sigName}>Ana Dolinar</p>
              <p className={styles.sigTitle}>Ustanoviteljica</p>
            </div>
          </div>

          <blockquote className={`${styles.policy} reveal reveal-delay-4`}>
            <span className={styles.policyLeaf} aria-hidden="true">🍃</span>
            <p className={styles.policyText}>{t.policy}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
