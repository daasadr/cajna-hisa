'use client';
import { useState, FormEvent } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Contact.module.css';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const f = t.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('done');
      setName('');
      setEmail('');
      setTopic('');
      setMessage('');
    }, 900);
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.formCol} reveal reveal-delay-1`}>
            {status === 'done' ? (
              <div className={styles.success}>
                <div className={styles.successIcon} aria-hidden="true">✓</div>
                <p>{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>{f.name}</label>
                  <input
                    id="contact-name"
                    type="text"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>{f.email}</label>
                  <input
                    id="contact-email"
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-topic" className={styles.label}>{f.topic}</label>
                  <select
                    id="contact-topic"
                    className={styles.select}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  >
                    <option value="" disabled>—</option>
                    {f.topicOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>{f.message}</label>
                  <textarea
                    id="contact-message"
                    className={styles.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? f.sending : f.submit}
                </button>
              </form>
            )}
          </div>

          <div className={`${styles.infoCol} reveal reveal-delay-2`}>
            <div className={styles.infoBlock}>
              <dl className={styles.infoList}>
                <div className={styles.infoItem}>
                  <dt className={styles.infoLabel}>{t.info.addressLabel}</dt>
                  <dd className={styles.infoVal}>{t.info.address}</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt className={styles.infoLabel}>{t.info.phoneLabel}</dt>
                  <dd className={styles.infoVal}>
                    <a href={`tel:${t.info.phone.replace(/\s/g, '')}`}>{t.info.phone}</a>
                  </dd>
                </div>
                <div className={styles.infoItem}>
                  <dt className={styles.infoLabel}>{t.info.emailLabel}</dt>
                  <dd className={styles.infoVal}>
                    <a href={`mailto:${t.info.email}`}>{t.info.email}</a>
                  </dd>
                </div>
                <div className={styles.infoItem}>
                  <dt className={styles.infoLabel}>{t.info.hoursLabel}</dt>
                  <dd className={styles.infoVal}>
                    {t.info.hoursWeek}
                    <br />
                    {t.info.hoursWeekend}
                  </dd>
                </div>
              </dl>
            </div>

            <Map popupText={t.mapTitle} />
            <p className={styles.mapNote}>{t.mapNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
