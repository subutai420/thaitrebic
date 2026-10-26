import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Vouchers } from '../components/Vouchers';
import { Gallery } from '../components/Gallery';
import { BeforeVisit } from '../components/BeforeVisit';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vouchers />
      <Gallery />
      <BeforeVisit />
      <FAQ />
      <Contact />
    </>
  );
}
