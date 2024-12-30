import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

function PricingCard({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    'Screen recording & cam bubble',
    'Instant editing',
    'Unlimited transcriptions',
    'Privacy controls',
    'Viewer insights'
  ];

  const limits = [
    'Up to 50 Creators Lite',
    'Up to 25 videos/person',
    'Up to 5 mins/video'
  ];

  return (
    <motion.div
      ref={ref}
      className="relative perspective-1000"
      initial={{ opacity: 0, rotateY: -20, z: -100 }}
      animate={isInView ? { opacity: 1, rotateY: 0, z: 0 } : { opacity: 0, rotateY: -20, z: -100 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05, rotateY: 5, z: 30 }}
    >
      <div className="bg-black rounded-3xl p-8 text-white shadow-[0_0_15px_rgba(126,217,87,0.3)] border border-[#7ed957]/20 transform-gpu preserve-3d hover:shadow-[0_0_30px_rgba(126,217,87,0.5)] transition-shadow duration-300">
        <h2 className="text-3xl font-bold mb-4">Starter</h2>
        <p className="text-gray-400 mb-6">Quick video messages</p>

        <motion.a
          href="#signup"
          className="inline-block bg-[#7ed957] text-black px-6 py-3 rounded-full font-inter-regular mb-8 hover:bg-[#6bc348] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up, It's Free
        </motion.a>

        <ul className="space-y-3 mb-8 text-sm">
          {limits.map((limit, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-[#7ed957]">•</span> {limit}
            </li>
          ))}
        </ul>

        <div className="border-gray-800 pt-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-[#7ed957]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function PricingSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <div className="bg-black -mt-12  ">
      <div className="relative w-full max-w-[90%] mx-auto mt-12">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[#e2ffd4] rounded-[40px] z-0" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
          <motion.h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            PRICING
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-inter-regular">
            <PricingCard delay={0} />
            <PricingCard delay={0.2} />
            <PricingCard delay={0.4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;