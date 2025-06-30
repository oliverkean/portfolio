import Home from '../sections/Home/Home';
import Experience from '../sections/Experience/Experience'
import Projects from '../sections/Project/Project';
function Main() {
  return (
    <>
      <div className="flex flex-col h-full items-center">
          <Home/>
          <Experience />
          <Projects />
      </div>
    </>
  );
}

export default Main;
