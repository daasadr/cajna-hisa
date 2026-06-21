import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import TeaPage from '@/components/TeaPage';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Čajna karta | Čajna hiša Dolina',
  description:
    'Celotna ponudba čajev in dobrot v Čajni hiši Dolina Ljubljana — zeleni, beli, oolong, zeliščni čaji in gorenjska zelišča.',
};

export default function CajiPage() {
  return (
    <>
      <Nav />
      <TeaPage />
      <Footer />
    </>
  );
}
