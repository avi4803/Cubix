import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1 
      ref={ref}
      className="text-5xl md:text-7xl font-black mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      TOO BUSY TO RECORD?
    </motion.h1>
  );
}

function IntroText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex-1 space-y-6 " ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-black">
          INTRODUCING
        </h2>
        <h2 className="text-4xl md:text-6xl font-black">
          <span className="text-[#7ed957]">VIRTUAL</span> YOU
        </h2>
      </motion.div>
      
      <motion.p 
        className="text-xl md:text-2xl font-inter-regular max-w-2xl"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        We will create your AI clone, transform raw content into stunning edits, and 
        deliver impressive results with minimal effort from your side!
      </motion.p>
    </div>
  );
}

function ImageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative" ref={ref}>
      <motion.div 
        className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden perspective-1000"
        initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -20, scale: 0.9 }}
        transition={{ 
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
          alt="Portrait of a woman"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div 
        className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#7ed957] p-6 rounded-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          rotate: 10,
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      />
    </div>
  );
}

function VirtualYou() {
  return (
    <div className='min-h-screen bg-black flex justify-center relative z-10'>
    
    <motion.div 
      className="min-h-screen bg-[#e2ffd4] p-8 md:p-16 lg:p-24 flex flex-col justify-center self-center max-w-[1803px] rounded-[50px] m-4 md:m-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <Hero />
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mt-8 md:mt-12">
          <IntroText />
          <ImageSection />
        </div>
      </div>
    </motion.div>
    </div>
    
  );
}

export default VirtualYou;