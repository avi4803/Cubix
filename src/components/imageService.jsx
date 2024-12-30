import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "TRUTH",
    borderColor: "border-blue-600"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "SUDANESE FOOD",
    borderColor: "border-orange-400"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "CAN YOU FIND IT?",
    borderColor: "border-green-500"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "DUBAI REAL ESTATE",
    borderColor: "border-lime-400"
  }
];

const ImageServices = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (scrollElement.scrollLeft >= (scrollElement.scrollWidth - scrollElement.clientWidth)) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-6xl md:text-8xl font-black text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          IMAGE BASED SERVICES
        </motion.h1>

        <div className="grid grid-cols-12 gap-4 mt-8">
          {/* Auto-scrolling carousel */}
          <div className="col-span-12">
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-[16/9] w-[500px] rounded-[2rem] overflow-hidden border-[3px] ${service.borderColor} flex-shrink-0`}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start justify-start p-6">
                    <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="col-span-3">
            <motion.div
              className="aspect-[9/16] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="col-span-6">
            <motion.div
              className="aspect-[16/9] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="col-span-3">
            <motion.div
              className="aspect-[9/16] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Third Row */}
          <div className="col-span-4">
            <motion.div
              className="aspect-[9/16] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="col-span-4">
            <motion.div
              className="aspect-[9/16] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="col-span-4">
            <motion.div
              className="aspect-[9/16] rounded-[2rem] bg-green-500"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageServices;