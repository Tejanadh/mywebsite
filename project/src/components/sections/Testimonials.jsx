import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import AnimatedSection from '../ui/AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Member since 2020",
      quote: "Kong Fitness completely transformed my life. I've lost 25kg and gained so much confidence. The trainers are exceptional and the community is incredibly supportive!",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Patel",
      role: "CrossFit Enthusiast",
      quote: "The CrossFit program at Kong is incredibly challenging but so rewarding. The coaches know exactly how to push you to your limits while keeping you safe.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Vikram Singh",
      role: "Member since 2019",
      quote: "As someone who was intimidated by gyms, Kong Fitness provided the perfect welcoming environment. The staff is friendly and the equipment is top-notch.",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Neha Reddy",
      role: "Yoga Practitioner",
      quote: "The yoga classes at Kong are the highlight of my week. The instructors are knowledgeable and the peaceful studio space is perfect for my practice.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anand Kumar",
      role: "Strength Training Member",
      quote: "I've trained at many gyms across India, and Kong Fitness stands out for its exceptional equipment and knowledgeable staff. My strength gains have been remarkable!",
      image: "https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-kong-black-800">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Testimonials" 
          title="What Our Members Say"
        />
        
        <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto" delay={0.3}>
          <p className="text-kong-gray-200">
            Don't just take our word for it. Hear from our members who have transformed their 
            lives through their fitness journey at Kong Fitness Studio.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard 
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
        
        <AnimatedSection className="bg-kong-black-700 p-8 rounded-lg mt-16 text-center" delay={0.6}>
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Transformation?</h3>
          <p className="text-kong-gray-200 mb-6 max-w-2xl mx-auto">
            Join our community of fitness enthusiasts and start your journey towards a healthier, 
            stronger you today. Our expert trainers are ready to help you achieve your goals.
          </p>
          <a href="#pricing" className="btn btn-primary">Join Now</a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;