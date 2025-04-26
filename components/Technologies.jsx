import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import SideNavbar from "./SideNavbar";
import SkillDetails from "./SkillDetails";

export default function Technologies() {
  const [float, setFloat] = useState(false);
  const [id, setId] = useState("programming");

  useEffect(() => {
    const timer = setTimeout(() => setFloat(true), 1500); // Start float after entrance
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { icon: <FaReact className='text-cyan-400' />, delay: 0 },
    { icon: <RiNextjsLine />, delay: 0.1 },
    { icon: <FaNode className='text-green-500' />, delay: 0.2 },
    { icon: <RiTailwindCssFill className='text-cyan-300' />, delay: 0.3 },
    { icon: <BiLogoPostgresql className='text-blue-300' />, delay: 0.4 },
    { icon: <SiMongodb className='text-green-500' />, delay: 0.5 },
    ,
    { icon: <FaHtml5 className='text-orange-300' />, delay: 0.6 },
    { icon: <FaCss3 className='text-blue-400' />, delay: 0.7 },
  ];

  return (
    <div className="my-12">
      <h2 className='my-12 py-4 text-center text-6xl font-bold bg-gradient-to-r from-stone-200 via-stone-400 to-stone-700 bg-clip-text text-transparent'>
        Technologies
      </h2>

      <div className='flex flex-wrap justify-center gap-6 px-4'>
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: 100, y: -10, opacity: 0 }}
            animate={{
              x: 0,
              y: float ? [0, -5, 0, 5, 0] : 0,
              opacity: 1,
            }}
            transition={{
              delay: item.delay,
              duration: float ? 3 : 0.8,
              repeat: float ? Infinity : 0,
              repeatType: "loop",
              ease: "easeInOut",
              type: float ? "tween" : "spring",
              stiffness: 60,
            }}
            className='text-6xl'
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      <div className='px-4 mt-20 flex'>
        <SideNavbar id={id} setId={setId} />
        <SkillDetails id={id} />
      </div>
    </div>
  );
}
