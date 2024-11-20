import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/NaflinProfile.jpg"; 
import {motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay},
  },

})

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <motion.h1 
        variants={container(0)}
        initial="hidden"
        animate="visible"
  className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-right lg:ml-16" // Adjust ml-16 as needed
>
  Naflin Ahamed
</motion.h1>
<motion.span 
variants={container(0.5)}
initial="hidden"
animate="visible"
  className="mt-4 lg:ml-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl font-medium text-right" // Adjust ml-16 as needed
>
  Front End Developer
</motion.span>

          <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
           className="my-2 max-w-xl py-6 font-light tracking-tighter lg:ml-16 text-center lg:text-left">
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4 -ml-16 lg:-ml-24">
          <div className="relative">
            <motion.img initial={{x:100, opacity: 0 }}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.7}}
              src={profilePic}
              alt="Naflin Ahamed"
              className="rounded-lg shadow-lg object-cover lg:w-80 lg:h-120"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
