import SkillItem from "./SkillItem";

export default function SkillCategory({ title, items }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pl-4 border-l-4 border-purple-500">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {items.map(({ name, icon: Icon, color }, index) => (
          <SkillItem key={index} name={name} Icon={Icon} color={color} />
        ))}
      </div>
    </div>
  );
}
