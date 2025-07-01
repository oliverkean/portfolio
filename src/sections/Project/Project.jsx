import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PROJECTS from "../../constants/projects";
import ProjectCard from "./components/ProjectCards";

const animation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="w-full h-full px-4 py-16 pt-20 md:pt-24 bg-gray-50 dark:bg-gray-800 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={animation}
          className="text-center mb-10"
        >
          <h1 className="text-2xl font-bold text-purple-900 dark:text-purple-400">
            My Projects
          </h1>
        </motion.div>

        <div className="flex justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {PROJECTS.map(
              ({ name, date, description, image, technologies, sourceCode }, index) => (
                <ProjectCard
                  key={index}
                  name={name}
                  date={date}
                  image={image}
                  technologies={technologies}
                  description={description}
                  sourceCode={sourceCode}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
