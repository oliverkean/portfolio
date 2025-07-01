import { motion } from "framer-motion";
import resume from '../../../../resume.pdf';
import LinkButton from '../../../components/LinkButton';

const descVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

export default function Description({ name }) {
  return (
    <motion.div
      className="w-full md:w-1/2 text-justify"
      variants={descVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-gray-700 dark:text-gray-200 mb-6">
        Hi! I’m{" "}
        <span className="text-purple-900 dark:text-purple-400 font-bold text-lg">
          {name}
        </span>
        , a full stack developer who enjoys creating websites and
        applications that help provide solutions. I’ve worked on
        different kinds of projects and enjoy both frontend and backend development.
        I’m always learning new things and love finding simple solutions to real-world problems.
        I also enjoy collaborating with others and building functional, accessible websites.
      </p>
      <div className="flex justify-start">
        <LinkButton name="View Resume" link={resume} />
      </div>
    </motion.div>
  );
}
