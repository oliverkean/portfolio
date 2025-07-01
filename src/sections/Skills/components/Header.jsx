import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Header({ title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="text-center mb-8"
    >
      <h1 className="text-2xl font-bold text-purple-900 dark:text-purple-400">
        {title}
      </h1>
    </motion.div>
  );
}
