import React from 'react';
import Navbar from '../components/Navbar';
import SubscriptionForm from '../components/SubscriptionForm';
import Footer from '../components/Footer';


export default function menu() {
  return (
    <div>
      <Navbar />
      <SubscriptionForm />
      <Footer />
    </div>
  );
}
