
import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect.js';

const HeroSection = ({ title, subtitle, children }) => {
  const typedSubtitle = useTypingEffect(subtitle, 50);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance"
              style={{ letterSpacing: '-0.02em' }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 min-h-[2rem] md:min-h-[3rem] max-w-[65ch]"
            >
              {typedSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full flex justify-center md:justify-start"
            >
              {children}
            </motion.div>
          </div>

          {/* Photo Content */}
          <div className="flex-1 flex justify-center md:justify-end w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px]">
            <div className="relative w-full aspect-square animate-photo-entrance">
              {/* Decorative background blur ring */}
              <div className="absolute inset-4 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Glass container around the image */}
              <div className="relative w-full h-full p-2.5 glass-circle rounded-full photo-hover-effect glow-effect flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-transparent bg-secondary relative">
                  <img 
                    src="https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/fa5f30aa550dda4b08369bfe503e399d.jpg" 
                    alt="Nitesh Senapati Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Subtle inner overlay for lighting */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
