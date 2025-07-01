import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimoniCard from './TestimoniCard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import supabase from '../helper/supabaseClient';

const testimonials = [
  {
    name: "Andi",
    location: "Office Worker, Jakarta",
    text: "SEA Catering helps me stay on track with my diet even during hectic workdays. The meals are tasty, filling, and arrive right on time!"
  },
  {
    name: "Andi",
    location: "Office Worker, Jakarta",
    text: "SEA Catering helps me stay on track with my diet even during hectic workdays. The meals are tasty, filling, and arrive right on time!"
  },
  {
    name: "Andi",
    location: "Office Worker, Jakarta",
    text: "SEA Catering helps me stay on track with my diet even during hectic workdays. The meals are tasty, filling, and arrive right on time!"
  },
  {
    name: "Andi",
    location: "Office Worker, Jakarta",
    text: "SEA Catering helps me stay on track with my diet even during hectic workdays. The meals are tasty, filling, and arrive right on time!"
  }
];

const Testimoni = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    fetchUser();
  }, []);

  const handleAddTestimoni = () => {
    if (!user) {
      setShowSignIn(true);
    } else {
      alert('Redirect to Add Testimoni Form (belum dibuat)');
    }
  };

  const handleSwitchToSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  return (
    <>
      <div className="py-20" style={{ backgroundColor: '#FBED70' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#41521F]">
            Let's See What Our<br />Customers Say
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <TestimoniCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <button
              onClick={handleAddTestimoni}
              className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#41521F' }}
            >
              Add Your Testimoni
            </button>
          </div>
        </div>
      </div>
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <SignIn
              onSwitchToSignUp={handleSwitchToSignUp}
              onClose={() => setShowSignIn(false)}
            />
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <SignUp
              onSwitchToSignIn={handleSwitchToSignIn}
              onClose={() => setShowSignUp(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Testimoni;