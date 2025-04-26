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
import { PiFileSqlDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const skills = [
  {
    id: "programming",
    category: "Programming Languages",
    icon: <FaCode className='text-stone-400 text-2xl' />,
    items: [
      { name: "Java", icon: <FaJava className="text-yellow-300" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Python", icon: <SiPython className="text-yellow-700" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-300" /> },
      { name: "SQL", icon: <PiFileSqlDuotone /> },
    ],
  },
  {
    id: "frameworks",
    category: "Frameworks & Libraries",
    icon: <FaCogs className='text-stone-400 text-2xl' />,
    items: [
      { name: "Next.js", icon: <SiNextdotjs className="text-stone-50" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "NumPy", icon: <SiNumpy className="text-sky-600" /> },
      { name: "Pandas", icon: <SiPandas className="text-indigo-500" /> },
    ],
  },
  {
    id: "database",
    category: "Databases",
    icon: <FaDatabase className='text-stone-400 text-2xl' />,
    items: [
      { name: "MySQL", icon: <SiMysql className="text-indigo-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-cyan-800" /> },
    ],
  },
];

export default function SkillDetails({ id }) {
  return (
    <div className="relative flex left-1/5 px-6 w-full ">
      {skills
        .filter((skill) => skill.id === id)
        .map((skill) => (
          <div key={skill.id} className="flex flex-col gap-8 h-full">
            <h3 className="text-2xl font-bold text-stone-300 flex items-center gap-3">
              {skill.icon}
              {skill.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {skill.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-4 bg-stone-900 backdrop-blur-3xl rounded-xl shadow-stone-600 shadow-sm hover:shadow-md transition duration-300 ease-in-out"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <span className="text-stone-300 font-medium text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
