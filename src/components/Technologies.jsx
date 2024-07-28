import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiDjango, SiMongodb, SiMysql, SiBootstrap, SiOpencv, SiTensorflow, SiCplusplus, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-wrap items-center justify-center gap-4">
                
                {/* Add your tech icons here */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="C++">
                    <SiCplusplus className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Java">
                    <FaJava className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Python">
                    <FaPython className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="HTML5">
                    <FaHtml5 className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="CSS3">
                    <FaCss3Alt className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="JavaScript">
                    <DiJavascript1 className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Node.js">
                    <FaNodeJs className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Django">
                    <SiDjango className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="React">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="MongoDB">
                    <SiMongodb className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="MySQL">
                    <SiMysql className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Bootstrap">
                    <SiBootstrap className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="GitHub">
                    <FaGithub className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Git">
                    <FaGitAlt className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="OpenCV">
                    <SiOpencv className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="TensorFlow">
                    <SiTensorflow className="text-6xl text-cyan-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-icon"
                    title="Tailwind CSS">
                    <SiTailwindcss className="text-6xl text-cyan-400" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
