import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode, FaCogs } from "react-icons/fa";
import { useState } from "react";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode className='text-stone-600 text-2xl' />,
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaCogs className='text-stone-600 text-2xl' />,
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase className='text-stone-600 text-2xl' />,
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id='skills' className='bg-stone-50 px-6 py-20'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='text-4xl font-bold text-center text-stone-800 mb-14'>
          Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {skills.map((group) => (
            <div
              key={group.category}
              className='bg-white border border-stone-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition'
            >
              <div className='flex items-center gap-3 mb-6'>
                {group.icon}
                <h3 className='text-xl font-semibold text-stone-700'>
                  {group.category}
                </h3>
              </div>
              <ul className='flex flex-wrap gap-3'>
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    onMouseEnter={() => setHovered(skill.name)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center transition-all duration-300 ease-in-out rounded-full bg-stone-100 px-3 py-2 cursor-default shadow-sm hover:bg-stone-200 ${
                      hovered === skill.name ? "pl-4 pr-5" : "p-3"
                    }`}
                  >
                    <span className='text-xl text-stone-700'>{skill.icon}</span>
                    <span
                      className={`ml-2 text-sm text-stone-700 font-medium transition-all duration-300 ease-in-out ${
                        hovered === skill.name
                          ? "opacity-100 max-w-xs"
                          : "opacity-0 max-w-0 overflow-hidden"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
