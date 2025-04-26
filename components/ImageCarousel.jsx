import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className='relative w-full h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden group'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={images[current]}
          initial={{ opacity: 0.2, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className='absolute inset-0'
        >
          <Image
            src={images[current]}
            alt={`Project image ${current + 1}`}
            fill
            className='object-cover rounded-t-3xl'
            sizes='(max-width: 768px) 100vw, 33vw'
            priority
          />
          <div className='absolute inset-0 bg-black/3 group-hover:bg-black/10 transition duration-300 rounded-t-3xl' />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
