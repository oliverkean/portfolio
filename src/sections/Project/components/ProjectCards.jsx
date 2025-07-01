export default function ProjectCard({ index, name, img, date, description }) {
  return (
    <li key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col">
      <img src={img} alt={`${name} logo`} className="w-16 h-16 mb-4 self-center" />
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-purple-800">{name}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </li>
  );
}