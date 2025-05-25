import React from 'react';
import { FaDumbbell, FaRunning, FaFire, FaMusic, FaYinYang, FaUserFriends } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import ProgramCard from '../ui/ProgramCard';
import AnimatedSection from '../ui/AnimatedSection';

const Programs = () => {
  const programs = [
    {
      title: 'Strength Training',
      icon: <FaDumbbell size={30} />,
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg',
      description: 'Build muscle, increase strength, and improve your metabolism with our comprehensive strength training program.'
    },
    {
      title: 'Cardio Fitness',
      icon: <FaRunning size={30} />,
      image: 'https://images.pexels.com/photos/2475878/pexels-photo-2475878.jpeg',
      description: 'Improve your endurance, heart health, and burn calories with our engaging cardio fitness sessions.'
    },
    {
      title: 'CrossFit',
      icon: <FaFire size={30} />,
      image: 'https://images.pexels.com/photos/28061/pexels-photo.jpg',
      description: 'Challenge yourself with high-intensity functional movements that combine cardio, strength, and gymnastics.'
    },
    {
      title: 'Zumba Classes',
      icon: <FaMusic size={30} />,
      image: 'https://images.pexels.com/photos/4090009/pexels-photo-4090009.jpeg',
      description: 'Dance your way to fitness with our energetic and fun Zumba classes led by certified instructors.'
    },
    {
      title: 'Yoga Sessions',
      icon: <FaYinYang size={30} />,
      image: 'https://images.pexels.com/photos/6111580/pexels-photo-6111580.jpeg',
      description: 'Find balance, flexibility, and inner peace with our expert-led yoga sessions for all experience levels.'
    },
    {
      title: 'Personal Training',
      icon: <FaUserFriends size={30} />,
      image: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg',
      description: 'Get personalized guidance and achieve your fitness goals faster with our expert personal trainers.'
    },
  ];

  return (
    <section id="programs" className="section-padding bg-kong-black-900">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Our Programs" 
          title="Expert Training Programs"
        />
        
        <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto" delay={0.3}>
          <p className="text-kong-gray-200">
            Our diverse range of fitness programs caters to all fitness levels and goals. 
            Whether you're looking to build strength, improve endurance, or find balance, 
            our expert trainers will guide you every step of the way.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
              <ProgramCard 
                title={program.title}
                icon={program.icon}
                image={program.image}
                description={program.description}
              />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-12" delay={0.5}>
          <a href="#pricing" className="btn btn-primary">View All Programs</a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Programs;