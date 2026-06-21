'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import type { TranslationKeys } from '@/lib/translations';
import { TEA_SECTIONS, FOOD_ITEMS } from '@/lib/teaData';
import type { Tea, FoodItem } from '@/lib/teaData';
import styles from './TeaPage.module.css';

type TeaPageT = TranslationKeys['teaPage'];

type ServingKey = 'konvicka' | 'zhong' | 'skodelica';

export default function TeaPage() {
  const { lang } = useLanguage();
  const t = translations[lang].teaPage;
  const [activeSlug, setActiveSlug] = useState(TEA_SECTIONS[0].slug);
  const subnavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const offset = 140;
      let current = TEA_SECTIONS[0].slug;
      for (const section of TEA_SECTIONS) {
        const el = document.getElementById(section.slug);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = section.slug;
        }
      }
      const foodEl = document.getElementById('dobrote');
      if (foodEl && foodEl.getBoundingClientRect().top <= offset) {
        current = 'dobrote';
      }
      setActiveSlug(current);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-tag">{t.pageTitle}</span>
          <h1 className={styles.pageHeading}>{t.pageHeading}</h1>
          <p className={styles.pageSub}>{t.pageSub}</p>
        </div>
      </div>

      <div className={styles.subnavWrap} ref={subnavRef}>
        <div className={styles.subnav}>
          {TEA_SECTIONS.map((s) => (
            <button
              key={s.slug}
              className={`${styles.subnavBtn} ${activeSlug === s.slug ? styles.subnavActive : ''}`}
              onClick={() => scrollToSection(s.slug)}
              type="button"
            >
              <span className={styles.subnavEmoji} aria-hidden="true">{s.emoji}</span>
              <span className={styles.subnavLabel}>{s.name[lang]}</span>
            </button>
          ))}
          <button
            className={`${styles.subnavBtn} ${activeSlug === 'dobrote' ? styles.subnavActive : ''}`}
            onClick={() => scrollToSection('dobrote')}
            type="button"
          >
            <span className={styles.subnavEmoji} aria-hidden="true">🍽️</span>
            <span className={styles.subnavLabel}>{t.treatsTitle}</span>
          </button>
        </div>
      </div>

      {TEA_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.slug}
          className={`${styles.teaSection} ${i % 2 === 1 ? styles.teaSectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji} aria-hidden="true">{section.emoji}</span>
              <h2 className={styles.sectionTitle}>{section.name[lang]}</h2>
              <p className={styles.sectionSub}>{section.sub[lang]}</p>
            </div>
            <div className={styles.teasGrid}>
              {section.teas.map((tea) => (
                <TeaCard key={tea.id} tea={tea} lang={lang} t={t} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="dobrote" className={`${styles.teaSection} ${styles.teaSectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEmoji} aria-hidden="true">🍽️</span>
            <h2 className={styles.sectionTitle}>{t.treatsTitle}</h2>
            <p className={styles.sectionSub}>{t.treatsSub}</p>
          </div>
          <div className={styles.foodGrid}>
            {FOOD_ITEMS.map((item) => (
              <FoodCard key={item.id} item={item} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeaCard({
  tea,
  lang,
  t,
}: {
  tea: Tea;
  lang: 'sl' | 'en';
  t: TeaPageT;
}) {
  const servingLabel = t.servingLabels[tea.servingType as ServingKey];
  return (
    <article className={`${styles.teaCard} ${tea.isSpeciality ? styles.teaCardSpecial : ''}`}>
      <div className={styles.teaCardTop}>
        <div className={styles.teaCardNames}>
          <h3 className={styles.teaName}>{tea.name[lang]}</h3>
          {tea.origin && <p className={styles.teaOrigin}>{tea.origin}</p>}
        </div>
        {tea.isSpeciality && (
          <span className={styles.specialita} aria-label={t.specialita}>
            ✦ {t.specialita}
          </span>
        )}
      </div>
      <p className={styles.teaDesc}>{tea.desc[lang]}</p>
      <div className={styles.teaPrices}>
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>{t.price100g}</span>
          <span className={styles.priceValue}>{tea.price100g}</span>
        </div>
        <div className={styles.priceSep} aria-hidden="true" />
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>{servingLabel}</span>
          <span className={styles.priceValue}>{tea.priceServing}</span>
        </div>
      </div>
    </article>
  );
}

function FoodCard({
  item,
  lang,
  t,
}: {
  item: FoodItem;
  lang: 'sl' | 'en';
  t: TeaPageT;
}) {
  return (
    <article className={`${styles.foodCard} ${item.isSeasonal ? styles.foodCardSeasonal : ''}`}>
      <span className={styles.foodEmoji} aria-hidden="true">{item.emoji}</span>
      <div className={styles.foodBody}>
        <h3 className={styles.foodName}>{item.name[lang]}</h3>
        <p className={styles.foodDesc}>{item.desc[lang]}</p>
        {item.note && (
          <p className={styles.foodNote}>
            <span className={styles.foodNoteIcon}>★</span>
            {' '}{t.orderNote}: {item.note[lang]}
          </p>
        )}
      </div>
      <div className={styles.foodPrice}>
        {item.isSeasonal ? (
          <span className={styles.seasonal}>{t.seasonal}</span>
        ) : (
          <span className={styles.foodPriceValue}>{item.price}</span>
        )}
      </div>
    </article>
  );
}
