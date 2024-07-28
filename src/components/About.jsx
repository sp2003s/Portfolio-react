import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src="/images/giphy.gif" alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-start">
            <a
              href="https://drive.google.com/file/d/1AoJz91INm8nAzNo9fdtLissrORkPIXJD/view?usp=sharing" target="_blank"
              className="inline-block px-5 py-2.5 rounded-md text-lg text-center font-bold cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:-translate-y-1.5 bg-purple-900 text-white w-full sm:w-1/2 lg:w-1/4"
            >
              My Resume
            </a>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
