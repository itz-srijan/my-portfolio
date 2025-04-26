import { useRef, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const projects = [
  {
    title: "ShowFlix",
    images: [
      "/images/showflix-1.png",
      "/images/showflix-2.png",
      "/images/showflix-3.png",
      "/images/showflix-4.png",
      "/images/showflix-5.png",
      "/images/showflix-6.png",
    ],
    description:
      "An OTT platform web application that provides users dynamic content browsing and watch movies and TV shows.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    GitHub: "https://github.com/itz-srijan/Showflix",
    url: "https://showflix-nine.vercel.app/",
  },
  {
    title: "Weather Application",
    images: [
      "/images/weather-1.png",
      "/images/weather-2.png",
      "/images/weather-3.png",
      "/images/weather-4.png",
    ],
    description:
      "A weather application that provides real-time weather updates and forecasts.",
    tech: ["HTML", "CSS", "JavaScript"],
    GitHub: "https://github.com/itz-srijan/Weather",
    url: "https://weather-inky-phi.vercel.app/",
  },
  {
    title: "Portfolio Website",
    images: ["/images/portfolio-1.png", "/images/portfolio-2.png"],
    description:
      "My personal portfolio built with modern stack and beautiful animations.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    GitHub: "https://github.com/itz-srijan/Showflix",
    url: "https://showflix-nine.vercel.app/",
  },
];

export default function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      let frame;
      const update = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        const shadowX = (x - centerX) / 3;
        const shadowY = (y - centerY) / 3;

        frame = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          card.style.boxShadow = `${-shadowX}px ${-shadowY}px 50px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.1)`;
        });
      };

      const reset = () => {
        cancelAnimationFrame(frame);
        card.style.transition = "transform 0.6s ease, box-shadow 0.6s ease";
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
        setTimeout(() => {
          card.style.transition = "";
        }, 600);
      };

      if (card) {
        card.addEventListener("mousemove", update);
        card.addEventListener("mouseleave", reset);
      }

      return () => {
        if (card) {
          card.removeEventListener("mousemove", update);
          card.removeEventListener("mouseleave", reset);
        }
      };
    });
  }, []);

  return (
    <section className='px-6 py-20 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className="my-10 flex flex-col items-center">
          <h2 className=' my-6 py-4 text-center text-6xl font-bold bg-gradient-to-r from-stone-200 via-stone-400 to-stone-700 bg-clip-text text-transparent'>
            My Recent Works
          </h2>
          <span className='italic text-stone-400 text-lg'>
            Here are the few personal projects I have worked on
          </span>
        </div>

        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='bg-gradient-to-r from-black to-stone-900  backdrop-blur-lg rounded-2xl shadow-xl border border-stone-700 overflow-hidden flex flex-col transition-transform duration-500 group'
            >
              <ImageCarousel images={project.images} />
              <div className='p-6 flex flex-col justify-between flex-1'>
                <div className='flex justify-between items-start'>
                  <h3 className='text-2xl font-semibold tracking-tight text-stone-100 group-hover:text-cyan-200 transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <div className='flex gap-4 p-1'>
                    <Link href={project.GitHub} target='_blank'>
                      <FaGithub className='text-2xl hover:text-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer' />
                    </Link>
                    <Link href={project.url} target='_blank'>
                      <FaExternalLinkSquareAlt className='text-2xl text-blue-300 hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer' />
                    </Link>
                  </div>
                </div>
                <p className='text-sm text-stone-300 my-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='flex bg-white text-stone-900 px-3 py-1 text-xs rounded-full border border-stone-100 shadow-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
