export default function ProjectCard({ index, name, image, description }) {
  return (
    <li key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col">
      <img src={image} alt={`${name} logo`} className="w-full rounded-md border-2 border-gray-400 h-56 mb-4 self-center" />
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
    </li>
  );
}