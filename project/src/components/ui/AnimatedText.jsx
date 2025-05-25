import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text, className = '', delay = 0.2, once = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const wordVariants = {
    hidden: {},
    visible: {},
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    },
  };

  // Split text into words and then into letters
  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block mr-2"
          variants={wordVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`letter-${letterIndex}`}
              className="inline-block"
              variants={letterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: delay + (wordIndex * 0.1) + (letterIndex * 0.03),
              }}
            >
              {letter}
            </motion.span>
          ))}
          {/* Add space after word */}
          {wordIndex !== words.length - 1 && " "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;