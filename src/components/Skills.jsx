import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiCplusplus, SiNextdotjs, SiHtml5, SiCss3, SiPostman, SiRender, SiNetlify, SiVercel } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillIcon = ({ Icon, name, color, index, columnsPerRow }) => {
  const row = Math.floor(index / columnsPerRow);
  const delay = 0.1 + (row * 0.1);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
      whileInView={{ opacity: 1 }}
      initial={{opacity: 0 }}
      transition={{ duration: 1, delay }}
    >
      <Icon style={{color: color}} className="text-5xl md:text-6xl lg:text-7xl mb-2" />
      <span className="text-xs md:text-sm text-gray-300 text-center">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = [
    { Icon: FaReact, name: 'React', color: '#61DAFB' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { Icon: SiCplusplus, name: 'C++', color: '#00599C' },
    { Icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { Icon: FaGithub, name: 'GitHub', color: '#f0f6fc' },,
    { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
    { Icon: SiHtml5, name: 'HTML', color: '#E34F26' },
    { Icon: SiCss3, name: 'CSS', color: '#1572B6' },
    { Icon: FaJava, name: 'Java', color: '#007396' },
    { Icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { Icon: SiRender, name: 'Render', color: '#46E3B7' },
    { Icon: SiNetlify, name: 'Netlify', color: '#00C7B7' },
    { Icon: SiVercel, name: 'Vercel', color: '#ffffff' },,
    { Icon: FaPython, name: 'Python', color: '#3776AB' },
  ];

  return (
    <>
    <div className='mt-16 mb-16'>
      <h1 className="text-center text-4xl mb-16">
          My Skills
        </h1>
    <section className="py-2 md:py-4 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillIcon 
              key={index} 
              Icon={skill.Icon} 
              name={skill.name} 
              color={skill.color} 
              index={index} 
              columnsPerRow={window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 3 : 4}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default SkillsSection;