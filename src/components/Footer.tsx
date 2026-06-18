'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <span className={styles.logoMain}>Dolina</span>
          <span className={styles.logoSub}>Čajna hiša</span>
        </div>

        <div className={styles.links}>
          <a href="#o-nas">{lang === 'sl' ? 'O nas' : 'About'}</a>
          <a href="#caji">{lang === 'sl' ? 'Čaji' : 'Teas'}</a>
          <a href="#galerija">{lang === 'sl' ? 'Galerija' : 'Gallery'}</a>
          <a href="#delavnice">{lang === 'sl' ? 'Delavnice' : 'Workshops'}</a>
          <a href="#kontakt">{lang === 'sl' ? 'Kontakt' : 'Contact'}</a>
        </div>

        <div className={styles.contact}>
          <a href="tel:+38640123456">+386 40 123 456</a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="mailto:pozdravljeni@cajna-dolina.si">pozdravljeni@cajna-dolina.si</a>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.rights}>{t.rights}</p>
          <p className={styles.disclaimer}>
            {t.disclaimer} / {t.disclaimerEn}
          </p>
        </div>
      </div>
    </footer>
  );
}
