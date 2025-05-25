import React from 'react';
import AnimatedText from './AnimatedText';

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <h3 className="section-subtitle uppercase tracking-wider">{subtitle}</h3>
      )}
      <AnimatedText
        text={title}
        className="section-title relative inline-block"
        delay={0.1}
      />
      <div className={`h-1 bg-kong-red w-24 mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;