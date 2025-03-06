import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 flex flex-col items-center justify-center min-h-screen w-full px-6 lg:px-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold w-full"
      >
        Projects
      </motion.h1>

      <div className="w-full max-w-6xl">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full bg-neutral-900 rounded-lg shadow-lg p-8 mb-12"
          >
            <h6 className="mb-3 text-2xl font-semibold text-center lg:text-left">{project.title}</h6>
            <p className="mb-4 text-neutral-400 text-center lg:text-left">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-purple-600 text-white px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
