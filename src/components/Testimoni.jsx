import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimoniCard from './TestimoniCard';

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

const Footer = () => {
  return (
    <div className="py-20" style={{ backgroundColor: '#FBED70' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#41521F' }}>
          Let's See What Our<br />
          Customers Say
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={3}
          breakpoints={{
            320: { slidesPerView: 1.2 }, 
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <TestimoniCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#41521F' }}>
            Add Your Testimoni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
