import PROJECTS from "../../constants/projects";
import ProjectCard from "./components/ProjectCards";
import Logo from "../../assets/images/Logo.png"
export default function Projects() {
  return (
    <section id="experiences" className="w-full h-full p-18 shadow-sm">
      <div className="text-center mb-10 mt-10">
        <h1 className="text-2xl font-bold text-purple-900">My Projects</h1>
      </div>
      <div className="flex justify-between gap-2">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(
            ({ name, date, description, image }, index) => (
              <ProjectCard name={name} date={date} image={image} description={description} index={index} />
            )
          )}
        </ul>
      </div>
    </section>
  );
}
