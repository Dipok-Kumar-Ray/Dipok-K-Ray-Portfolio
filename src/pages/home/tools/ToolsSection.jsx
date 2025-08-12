import React, { useEffect, useState, useRef } from 'react';
import { FaKey } from 'react-icons/fa';

import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiFigma
} from "react-icons/si";

// Custom hook for counting animation that runs only once on first intersection
const useCounterAnimation = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // track if animation already ran

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animate = () => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, ref };
};

const ToolsSection = () => {
  const tools = [
    {
      icon: <SiReact className="text-[#61DAFB] w-10 h-10" />,
      name: 'React',
      percentage: 95,
      description: 'Modern frontend development using reusable components.',
    },
    {
      icon: <SiTailwindcss className="text-[#38B2AC] w-10 h-10" />,
      name: 'Tailwind CSS',
      percentage: 93,
      description: 'Utility-first CSS framework for rapid UI styling.',
    },
    {
      icon: <SiFirebase className="text-[#FFCA28] w-10 h-10" />,
      name: 'Firebase',
      percentage: 90,
      description: 'Authentication, hosting, and Firestore database.',
    },
    {
      icon: <SiMongodb className="text-[#4DB33D] w-10 h-10" />,
      name: 'MongoDB',
      percentage: 88,
      description: 'NoSQL database for storing flexible data structures.',
    },
    {
      icon: <SiExpress className="text-white w-10 h-10" />,
      name: 'Express.js',
      percentage: 85,
      description: 'Backend API development with Node.js support.',
    },
    {
      icon: <FaKey className="text-yellow-400 w-10 h-10" />,
      name: "JWT",
      percentage: 87,
      description: "Secure authentication with JSON Web Tokens.",
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white  relative overflow-hidden mt-20">
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: Title and Subtitle */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-green-400 text-3xl font-bold mb-2 flex items-center justify-center lg:text-4xl lg:font-bold ">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
           My Skills
          </h2>
          <h2 className="text-xl lg:text-2xl font-bold leading-tight">
            Design, develop, deliver: my <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">essential gear</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const { count, ref } = useCounterAnimation(tool.percentage);
            return (
              <div
                key={index}
                ref={ref}
                className="bg-[#2c3034] p-6 rounded-lg flex items-center space-x-4
                           relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-pointer
                           before:absolute before:inset-0 before:p-[2px] before:rounded-lg
                           before:bg-gradient-to-br before:from-green-400 before:to-teal-500 before:opacity-0
                           hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-0"
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  {tool.icon}
                </div>

                {/* Tool Name and Description */}
                <div className="flex-grow relative z-10">
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>

                {/* Percentage Counter */}
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 flex-shrink-0 relative z-10">
                  {count}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;