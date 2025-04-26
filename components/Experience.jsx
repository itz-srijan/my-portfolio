"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaCogs } from "react-icons/fa";

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section id='experience' className='py-20 px-6 md:px-12 lg:px-20'>
      <h2 className='my-12 py-4 text-center text-6xl font-bold bg-gradient-to-r from-stone-200 via-stone-400 to-stone-700 bg-clip-text text-transparent'>
        Work Experience
      </h2>

      <div className='mx-auto w-full max-w-md flex flex-col items-center'>
        {/* Card Container */}
        <motion.div
          onClick={toggleCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`w-full overflow-hidden bg-gradient-to-r from-black to-stone-900  backdrop-blur-lg shadow-2xl border border-stone-600 cursor-pointer transition-all duration-500 rounded-3xl`}
        >
          {/* Top Content */}
          <div className='p-6 flex justify-center gap-8 items-center'>
            <Image
              src='/images/tcs.jpg'
              alt='TCS Logo'
              width={64}
              height={64}
              className='w-16 h-16 rounded-full object-cover border border-stone-700 shadow-md'
            />
            <div className='flex flex-col'>
              <h3 className='text-2xl font-semibold bg-gradient-to-r from-stone-200 via-stone-400 to-stone-700 bg-clip-text text-transparent'>
                System Engineer
              </h3>
              <p className='text-md text-stone-400 mb-0.5'>
                Tata Consultancy Services
              </p>
              <div className="flex gap-2">
                <p className='inline-block bg-stone-300 text-sm text-black px-2 py-0.5 rounded-2xl mt-1 w-max'>
                  Kolkata
                </p>
                <p className='inline-block bg-stone-300 text-sm text-black px-2 py-0.5 rounded-2xl mt-1 w-max'>
                  Nov, 2024 - Present
                </p>
              </div>
            </div>
          </div>

          {/* Animated Expandable Section */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='details'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='px-6 pb-6 pt-0 leading-relaxed space-y-4 rounded-b-3xl' // <- Rounded at the bottom too
              >
                <div className='border-t border-stone-700 my-4' />
                <h3 className='text-2xl font-semibold bg-gradient-to-r from-stone-300 via-stone-500 to-stone-700 bg-clip-text text-transparent text-center'>
                  What I Do
                </h3>
                <div className='flex flex-col space-y-3 text-stone-400'>
                  <div className='flex items-start gap-3'>
                    <FaCogs className='mt-1 text-white text-2xl' />
                    <p>
                      Developed and maintained TCS BaNCS, ensuring seamless
                      financial operations and platform stability.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <FaCogs className='mt-1 text-white text-2xl' />
                    <p>
                      Resolved premium-related production issues daily,
                      significantly improving system reliability and SLA
                      compliance.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <FaCogs className='mt-1 text-white text-2xl' />
                    <p>
                      Enhanced EMI processing components by 20% through code
                      optimization, bug fixes, and performance tuning.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
