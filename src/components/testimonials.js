import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";

const testimonials = [
  {
    name: "PIYUSH RANJAN",
    company: "VAISHALI ENTERPRISES",
    review:
      "BIZDOOR’s experts were knowledgeable and provided timely assistance. Their dedication ensured my business setup was smooth and hassle-free.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "RAHUL",
    company: "BASERA STAYS PRIVATE LIMITED",
    review:
      "I am impressed with BIZDOOR’s comprehensive services. They provided exceptional guidance for my NGO registration and compliance needs.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "PRATIK",
    company: "GAYATRI MEDICE TRADERS",
    review:
      "BIZDOOR transformed my business idea into reality. Their streamlined process and professional advice were invaluable.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "AKSHAY",
    company: "KW SOLUTIONS PVT LTD",
    review:
      "Working with BIZDOOR was a pleasure. Their team was always available to answer questions and guide me through the entire process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">Some testimonials from our customers</p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-company">{testimonial.company}</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-review">{testimonial.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
