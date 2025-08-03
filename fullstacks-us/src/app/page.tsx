import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhatWeBuild from '@/components/WhatWeBuild';
import Counters from '@/components/Counters';
import Portfolio from '@/components/Portfolio';
import Communicate from '@/components/Communicate';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhatWeBuild />
      <Counters />
      <Portfolio />
      <Communicate />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
