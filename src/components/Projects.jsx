"use client";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { projectsData } from "../constants/index";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isLaptop = useMediaQuery({ minWidth: 768 });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isLaptop ? 0.1 : 0.3,
      },
    },
  };

  return (
    <section id="projects" className="pt-8">
      <h1 className="my-20 text-center text-4xl">My Projects</h1>

      <motion.ul
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            transition={{ 
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1.000],
            }}
          >
            <Card
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;