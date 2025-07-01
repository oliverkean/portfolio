export default function ProjectCard({ index, name, image, description }) {
  return (
    <li
      key={index}
      className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-purple-400"
    >
      <img
        src={image}
        alt={`${name} logo`}
        className="w-full rounded-t-xl border-gray-400 h-56 mb-4 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
    </li>
  );
}
