import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiFirebase,
} from 'react-icons/si';
import { FaKey } from 'react-icons/fa'; // Replacing SiJwt with FaKey

const tools = [
  { icon: <SiReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiExpress className="text-gray-200" />, name: 'Express.js' },
  { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
  { icon: <FaKey className="text-yellow-400" />, name: 'JWT' },
  { icon: <SiFigma className="text-pink-500" />, name: 'Figma' },
  { icon: <SiFirebase className="text-orange-400" />, name: 'Firebase' },
  { icon: <SiGithub className="text-white" />, name: 'GitHub' },
];

const ToolsSliderSection = () => {
  return (
    <section className="bg-[#0F172A] pt-16  overflow-hidden">
      

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center mx-10 text-center group transition-transform duration-300 hover:scale-105"
          >
            <div className="text-6xl mb-2">{tool.icon}</div>
            <p className="py-3 text-sm text-gray-300 group-hover:text-lime-400 transition-all duration-300">
              {tool.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ToolsSliderSection;