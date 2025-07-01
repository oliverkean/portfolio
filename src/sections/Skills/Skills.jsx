import SKILLS from "../../constants/skills";
import Header from "./components/Header";
import SkillCategory from "./components/SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="w-full h-full p-18 shadow-sm bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Header title="My Skills" />
        <SkillCategory title="Languages" items={SKILLS.languages} />
        <SkillCategory title="Frameworks & Libraries" items={SKILLS.frameworks} />
        <SkillCategory title="Tools" items={SKILLS.tools} />
        <SkillCategory title="Others" items={SKILLS.others} />
      </div>
    </section>
  );
}
