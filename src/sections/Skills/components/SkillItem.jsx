import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillItem({ name, Icon, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-sm hover:shadow-md transition duration-300 ease-in-out text-sm"
    >
      <Icon className={`text-base ${color}`} />
      <span className="text-gray-700 dark:text-gray-200 font-medium">{name}</span>
    </motion.div>
  );
}
