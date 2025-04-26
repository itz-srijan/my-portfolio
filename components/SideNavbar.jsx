"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase } from "react-icons/fa";
import { SiFramework } from "react-icons/si";

const navItems = [
  { id: "programming", icon: <FaCode />, label: "Languages" },
  { id: "frameworks", icon: <SiFramework />, label: "Frameworks" },
  { id: "database", icon: <FaDatabase />, label: "Databases" },
];

export default function SideNavbar({id, setId}) {
  return (
    <motion.div
      className='group absolute z-50'
      initial={{ width: 60 }}
      whileHover={{ width: 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className='relative flex flex-col gap-2 bg-stone-800/10 backdrop-blur-md rounded-2xl py-4 px-2 border-b-1 border-r-1 border-stone-800 shadow-lg'>
        {navItems.map((item) => {
          const isSelected = id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => {
                setId(item.id);
              }}
              className='cursor-pointer relative flex items-center w-full px-3 py-1.5'
            >
              {isSelected && (
                <motion.div
                  layoutId='highlight'
                  className='absolute inset-0 bg-white/50 rounded-xl z-0'
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Icon */}
              <button
                className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-lg text-xl transition-all duration-300
                  ${
                    isSelected
                      ? "text-stone-800 scale-105"
                      : "text-stone-400 hover:text-white"
                  }`}
              >
                {item.icon}
              </button>

              {/* Label (always takes space, but only visible on hover) */}
              <div className='ml-4 w-[140px] overflow-hidden'>
                <span
                  className={`block text-sm font-medium whitespace-nowrap opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 
                    ${
                      isSelected
                        ? "text-stone-800"
                        : "text-stone-400 hover:text-white"
                    } `}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
