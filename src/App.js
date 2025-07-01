import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import About from './components/About';
import Testimoni from './components/Testimoni';
import LastHome from './components/LastHome';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

function App() {
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

export default App;
