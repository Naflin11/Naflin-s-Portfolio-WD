import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 w-full flex flex-col items-center px-10">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl w-full"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <p className="my-2 max-w-5xl w-full text-justify py-6">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
