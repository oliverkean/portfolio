import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

export default function SkillCategory({ title, items }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pl-4 border-l-4 border-purple-500">
        {title}
      </h2>
      <motion.div
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {items.map(({ name, icon: Icon, color }, index) => (
          <SkillItem key={index} name={name} Icon={Icon} color={color} />
        ))}
      </motion.div>
    </div>
  );
}
