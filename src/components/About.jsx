import React from 'react'
import { aboutText } from '../constants'
import aboutImg from "../assets/about.jpg"
import { motion } from "framer-motion"

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pt-4">
        <h1 className="my-20 text-center text-4xl">
          About Me
        </h1>
        <div className="flex flex-wrap">
          <div
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3,delay: 0.2 }}
                src={aboutImg} alt="about" className='rounded-2xl' />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }} 
                className='my-2 max-w-xl py-6'>
                {aboutText}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
