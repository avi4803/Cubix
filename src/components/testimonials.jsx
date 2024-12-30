import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ThumbsUp, Mail, Phone } from 'lucide-react';
import { div } from 'framer-motion/client';

function TestimonialCard({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-black p-6 rounded-3xl flex flex-col gap-4 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute -right-20 -top-20 w-40 h-40 bg-[#7ed957] rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      />
      <p className="text-white text-lg leading-relaxed">
        "Cubix Media delivered top-notch video edits and content that boosted my 
        social media. Always on time and super creative. Highly recommend!"
      </p>
      <div className="flex items-center gap-3 mt-2">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
          alt="Client"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">Arshdeep Brar</p>
          <p className="text-gray-400 text-sm">Marketing Director</p>
        </div>
      </div>
    </motion.div>
  );
}

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="bg-[#7ed957] text-black px-6 py-2 rounded-full font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          making
        </motion.div>
        <motion.div
          className="bg-[#7ed957] text-black px-6 py-2 rounded-full font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          our clients
        </motion.div>
        <motion.div
          className="bg-[#7ed957] text-black px-6 py-2 rounded-full font-bold flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          happy
          <span className="text-2xl" role="img" aria-label="happy emoji">
            😎
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mt-24 text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Start working with us
      </h2>
      <motion.button
        className="bg-[#7ed957] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#6bc348] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
      
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-white">
        <motion.a
          href="tel:JP16181574"
          className="flex items-center gap-2 hover:text-[#7ed957] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Phone className="w-5 h-5" />
          <span>+919161811374</span>
        </motion.a>
        <motion.a
          href="mailto:avinash157@gmail.com"
          className="flex items-center gap-2 hover:text-[#7ed957] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-5 h-5" />
          <span>avinash157@gmail.com</span>
        </motion.a>
      </div>
      
      <motion.div
        className="mt-8 text-2xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        CUBIX MEDIA
      </motion.div>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <div className='bg-black min-h-screen flex justify-center relative z-10'>
    <div className="min-h-screen bg-gradient-to-b m-16 from-[#e2ffd4] rounded-[40px] to-black elative w-full max-w-[90%]  mx-auto ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard delay={0} />
          <TestimonialCard delay={0.2} />
          <TestimonialCard delay={0.4} />
        </div>

        <ContactSection />
      </div>
    </div>
    </div>
  );
}

export default Testimonials;