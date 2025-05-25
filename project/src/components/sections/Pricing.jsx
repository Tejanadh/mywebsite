import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import PricingCard from '../ui/PricingCard';
import AnimatedSection from '../ui/AnimatedSection';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '1499',
      features: [
        'Full access to gym equipment',
        'Basic fitness assessment',
        'Access during standard hours',
        '1 Group class per week',
        'Locker access',
        'Fitness app access',
      ],
      isPopular: false,
    },
    {
      title: 'Premium Plan',
      price: '2499',
      features: [
        'Full 24/7 gym access',
        'Comprehensive fitness assessment',
        'Personalized workout plan',
        'Unlimited group classes',
        'Nutrition consultation',
        '1 Personal training session/month',
        'Premium locker access',
        'Fitness app with premium features',
      ],
      isPopular: true,
    },
    {
      title: 'Elite Plan',
      price: '3999',
      features: [
        'Full 24/7 gym access',
        'Advanced fitness assessment',
        'Customized workout and nutrition plan',
        'Unlimited group classes',
        '4 Personal training sessions/month',
        'Quarterly body composition analysis',
        'Premium locker with amenities',
        'Priority class booking',
      ],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-kong-black-900">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Pricing Plans" 
          title="Choose Your Membership"
        />
        
        <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto" delay={0.3}>
          <p className="text-kong-gray-200">
            We offer flexible membership options to fit your needs and budget. All plans include
            access to our state-of-the-art facilities and supportive fitness community.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative h-full">
              <PricingCard 
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <AnimatedSection className="mt-16 bg-kong-black-800 p-8 rounded-lg" delay={0.6}>
          <h3 className="text-2xl font-bold mb-4 text-center">Additional Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-kong-black-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Personal Training</h4>
              <p className="text-kong-gray-300 mb-2">1-on-1 sessions with expert trainers</p>
              <p className="text-lg font-bold">From ₹800 / session</p>
            </div>
            
            <div className="bg-kong-black-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Nutrition Consultation</h4>
              <p className="text-kong-gray-300 mb-2">Personalized diet and nutrition plans</p>
              <p className="text-lg font-bold">From ₹1500 / consultation</p>
            </div>
            
            <div className="bg-kong-black-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Group Classes</h4>
              <p className="text-kong-gray-300 mb-2">Specialized fitness classes</p>
              <p className="text-lg font-bold">From ₹300 / class</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-kong-gray-200 mb-4">
              Interested in corporate memberships or special packages?
            </p>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;