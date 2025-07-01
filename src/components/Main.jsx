import Home from '../sections/Home/Home';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import Projects from '../sections/Project/Project';
import DarkModeToggleButton from '../components/DarkMode';

function Main() {
  return (
    <>
      <div className="flex flex-col h-full items-center relative">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <DarkModeToggleButton />
      </div>
    </>
  );
}

export default Main;
