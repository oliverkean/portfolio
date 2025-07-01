import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const introVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

function Introduction({ name, role }) {
  return (
    <motion.div
      className="w-full md:w-1/2"
      variants={introVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-purple-900 dark:text-purple-400 font-bold mb-2">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-3">
          {role}
        </p>
        <SocialLinks />
      </div>
    </motion.div>
  );
}

export default Introduction;
