import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap lg:justify-center no-underline"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold font-fm text-lg">{project.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-sm font-normal underline">GitHub</span></h6>
              <p className="mb-4 text-neutral-400 font-fm text-lg">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
