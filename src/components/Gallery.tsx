'use client';
import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { asset } from '@/lib/basePath';
import styles from './Gallery.module.css';

const PHOTOS = [
  // Notranjost / Interior
  { id: 1,  file: 'gallery-1.jpg',                                    category: 0 },
  { id: 2,  file: 'gallery-2.jpg',                                    category: 0 },
  { id: 3,  file: 'gallery-3.jpg',                                    category: 0 },
  // Čaji & skodelice / Teas & cups
  { id: 4,  file: 'gallery-4.jpg',                                    category: 1 },
  { id: 5,  file: 'gallery-5.jpg',                                    category: 1 },
  { id: 6,  file: 'gallery-6.jpg',                                    category: 1 },
  { id: 7,  file: 'onanacha-matcha-847918.jpg',                       category: 1 },
  { id: 8,  file: 'dungthuyvunguyen-matcha-latte-2356772_1920.jpg',   category: 1 },
  // Delavnice / Workshops
  { id: 9,  file: 'gallery-7.webp',                                   category: 2 },
  { id: 10, file: 'gallery-8.jpg',                                    category: 2 },
  { id: 11, file: 'gallery-9.jpg',                                    category: 2 },
  // Degustacije / Tastings
  { id: 12, file: 'gallery-10.webp',                                  category: 3 },
  { id: 13, file: 'gallery-11.jpg',                                   category: 3 },
  { id: 14, file: 'joannakkphotography-chocolate-cake-4446608_1920.jpg', category: 3 },
  { id: 15, file: 'onanacha-sweets-847920_1920(1).jpg',               category: 3 },
];

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;
  const [activeFilter, setActiveFilter] = useState(-1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = activeFilter === -1 ? PHOTOS : PHOTOS.filter((p) => p.category === activeFilter);

  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    const idx = visible.findIndex((p) => p.id === lightbox);
    setLightbox(visible[(idx - 1 + visible.length) % visible.length].id);
  }, [lightbox, visible]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    const idx = visible.findIndex((p) => p.id === lightbox);
    setLightbox(visible[(idx + 1) % visible.length].id);
  }, [lightbox, visible]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, prev, next]);

  const currentPhoto = PHOTOS.find((p) => p.id === lightbox);

  return (
    <section id="galerija" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
        </div>

        <div className={`${styles.filters} reveal reveal-delay-2`} role="group" aria-label="Filter galerije">
          <button
            className={`${styles.filterBtn} ${activeFilter === -1 ? styles.active : ''}`}
            onClick={() => setActiveFilter(-1)}
          >
            {t.filterAll}
          </button>
          {t.filters.map((label, i) => (
            <button
              key={i}
              className={`${styles.filterBtn} ${activeFilter === i ? styles.active : ''}`}
              onClick={() => setActiveFilter(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map((photo, i) => (
            <button
              key={photo.id}
              className={`${styles.item} reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setLightbox(photo.id)}
              aria-label={`Odpri sliko ${photo.id}`}
            >
              <div className={styles.imgWrap}>
                <img
                  src={asset(`/images/${photo.file}`)}
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
                <div className={styles.imgOverlay} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                    <path d="M10 14h8M14 10v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && currentPhoto && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija"
        >
          <button className={styles.lbClose} onClick={closeLightbox} aria-label="Zapri">×</button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Prejšnja slika"
          >‹</button>
          <div className={styles.lbImgWrap} onClick={(e) => e.stopPropagation()}>
            <img
              src={asset(`/images/${currentPhoto.file}`)}
              alt=""
              decoding="async"
              className={styles.lbImg}
            />
          </div>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Naslednja slika"
          >›</button>
        </div>
      )}
    </section>
  );
}
