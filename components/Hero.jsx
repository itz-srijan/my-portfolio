"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

const greetings = [
  "নমস্কার!",
  "Hello!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Hallo!",
  "नमस्ते!",
  "こんにちは!",
  "안녕하세요!",
  "Olá!",
  "你好!",
  "Привет!",
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedParagraph, setTypedParagraph] = useState("");
  const [paraIndex, setParaIndex] = useState(0);

  const paragraphText = `Welcome to my Portfolio. I am a passionate developer with a strong foundation in full-stack web development, specializing in clean, maintainable code and performance-driven applications. Constantly learning, building, and improving.`;

  // Typing animation for greetings
  useEffect(() => {
    const current = greetings[greetingIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(current.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(current.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, greetingIndex]);

  // Typing animation for paragraph
  useEffect(() => {
    if (paraIndex < paragraphText.length) {
      const timeout = setTimeout(() => {
        setTypedParagraph((prev) => prev + paragraphText.charAt(paraIndex));
        setParaIndex((prev) => prev + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [paraIndex, paragraphText]);

  return (
    <section className='px-4 py-12 md:py-20 lg:py-28'>
      <div className='mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* Text Section */}
        <div className='w-full lg:w-[60%] text-center lg:text-left'>
          {/* Typing Animation for greetings */}
          <div className='h-16 mb-6 flex justify-center lg:justify-start items-center text-4xl font-bold text-indigo-300'>
            <motion.span
              key={displayedText}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {displayedText}
              <motion.span
                className='inline-block w-1 h-8 bg-white ml-1'
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
              />
            </motion.span>
          </div>

          {/* Heading and Subheading with entrance animation */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-stone-300 via-stone-600 to-stone-700 bg-clip-text text-transparent'>
            I'm Srijan Mondal
          </h1>

          <p className='text-3xl font-medium mt-2 text-stone-300'>
            a Software Engineer and Full Stack Developer
          </p>

          {/* Typing Animation for paragraph with blinking cursor */}
          <div className='mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-stone-400'>
            {typedParagraph}
            <motion.span
              className='inline-block w-[2px] h-6 bg-stone-300 ml-1'
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>

          {/* Resume Button */}
          <a
            href='/documents/SRIJAN_MONDAL_RESUME.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='mt-8 inline-flex items-center gap-x-2 bg-white hover:bg-stone-400 text-stone-900 font-semibold text-lg px-4 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105'
          >
            <FaFileDownload className='text-xl' />
            Resume
          </a>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <Image
            src='/images/srijan-2.jpg'
            alt='Srijan Mondal'
            width={360}
            height={360}
            className='rounded-[2rem] border border-stone-300 shadow-xl object-cover h-auto w-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]'
            priority
          />
        </div>
      </div>
    </section>
  );
}
