'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Nav.module.css';

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/#o-nas', label: t.about },
    { href: '/#caji', label: t.menu },
    { href: '/#galerija', label: t.gallery },
    { href: '/#delavnice', label: t.workshops },
    { href: '/#kontakt', label: t.contact },
  ];

  const handleLink = () => setOpen(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Čajna hiša Dolina – domov">
          <span className={styles.logoMain}>Dolina</span>
          <span className={styles.logoSub}>Čajna hiša</span>
        </Link>

        <nav className={styles.links} aria-label="Glavna navigacija">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.langBtn}
            onClick={toggle}
            aria-label={`Preklopi jezik na ${lang === 'sl' ? 'angleščino' : 'slovenščino'}`}
          >
            <span className={lang === 'sl' ? styles.activeLang : ''}>SL</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === 'en' ? styles.activeLang : ''}>EN</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Zapri meni' : 'Odpri meni'}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileLinks}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={handleLink}
            >
              {l.label}
            </Link>
          ))}
          <button className={styles.mobileLang} onClick={toggle}>
            {lang === 'sl' ? 'English' : 'Slovenščina'}
          </button>
        </nav>
      </div>
    </header>
  );
}
