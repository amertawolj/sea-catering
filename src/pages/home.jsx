import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';
import About from '../components/About';
import Testimoni from '../components/Testimoni';
import LastHome from '../components/LastHome';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <About />
      <Testimoni />
      <LastHome />
      <Footer />
    </div>
  );
}
