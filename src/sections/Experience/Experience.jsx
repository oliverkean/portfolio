import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EXPERIENCE from "../../constants/experience";
import { IoCalendarClear } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const animation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experiences"
      className="w-full h-full px-4 py-12 pt-20 md:pt-24 bg-gray-50 dark:bg-gray-900 shadow-md"
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
            My Experiences
          </h1>
        </motion.div>

        <div className="flex justify-center">
          <ol className="relative border-s border-gray-400 dark:border-gray-600 w-full px-2 sm:px-6">
            {EXPERIENCE.map(
              ({ company, date, address, role, description }, index) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true, margin: "-100px" });

                return (
                  <li className="mb-10 ms-6" key={index}>
                    <span className="absolute flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-purple-800 dark:bg-purple-500 rounded-full -start-2 sm:-start-2.5 md:-start-3 ring-4 sm:ring-6 md:ring-8 ring-white dark:ring-gray-900"></span>
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={animation}
                      className="border border-gray-300 dark:border-gray-600 p-4 rounded-md bg-white dark:bg-gray-800 shadow-sm"
                    >
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 flex items-center gap-1.5">
                        <IoCalendarClear />
                        {date}
                      </p>

                      <div className="flex justify-between flex-wrap gap-y-2 mb-1">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-400">
                          {company}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1.5">
                          <FaLocationDot />
                          {address}
                        </span>
                      </div>

                      <p className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-1">
                        {role}
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-300">
                        {description}
                      </p>
                    </motion.div>
                  </li>
                );
              }
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
