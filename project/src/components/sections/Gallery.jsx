import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

const Gallery = () => {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      caption: 'State-of-the-art equipment'
    },
    {
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      caption: 'Spacious workout areas'
    },
    {
      url: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg',
      caption: 'Professional trainers'
    },
    {
      url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      caption: 'Group fitness classes'
    },
    {
      url: 'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg',
      caption: 'Cardio section'
    },
    {
      url: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg',
      caption: 'Weight training area'
    },
    {
      url: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg',
      caption: 'Recovery zone'
    }
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    // Make sure Swiper is properly initialized
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <section id="gallery" className="section-padding bg-kong-black-800">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Gallery" 
          title="Explore Our Facility"
        />
        
        <AnimatedSection className="mb-10 text-center max-w-3xl mx-auto" delay={0.3}>
          <p className="text-kong-gray-200">
            Take a virtual tour of our premium fitness facility featuring state-of-the-art 
            equipment, spacious workout areas, and a motivating atmosphere to help you 
            achieve your fitness goals.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <Swiper
            ref={swiperRef}
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
            className="gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg font-semibold">{image.caption}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
        
        <AnimatedSection className="mt-10 text-center" delay={0.5}>
          <a href="#contact" className="btn btn-outline">
            Schedule a Tour
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;