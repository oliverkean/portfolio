export default function SkillItem({ name, Icon, color }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition duration-300 ease-in-out text-sm">
      <Icon className={`text-base ${color}`} />
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );
}
