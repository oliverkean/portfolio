import PROJECTS from "../../constants/projects";
import ProjectCard from "./components/ProjectCards";

export default function Projects() {
  return (
    <section id="projects" className="w-full h-full px-4 py-16 pt-20 md:pt-24 bg-gray-50 dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-purple-900 dark:text-purple-400">My Projects</h1>
        </div>
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {PROJECTS.map(({ name, date, description, image, technologies }, index) => (
              <ProjectCard
                key={index}
                name={name}
                date={date}
                image={image}
                technologies={technologies}
                description={description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
