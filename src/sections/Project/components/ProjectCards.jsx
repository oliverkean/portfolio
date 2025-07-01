import {
  FaGithub,
} from "react-icons/fa";
export default function ProjectCard({ name, image, description, technologies, sourceCode }) {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-500">
      <img
        src={image}
        alt={`${name} project preview`}
        className="w-full h-56 object-cover rounded-t-xl border-b border-gray-200 dark:border-gray-700"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center justify-center text-xs bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white font-medium px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-auto text-center rounded-md text-sm font-medium text-white dark:bg-purple-600 bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <span><FaGithub/></span>
            View Source Code
          </a>
        )}
      </div>
    </li>
  );
}
